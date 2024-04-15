import clientPromise from "@/libs/mongo";
import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { industry } = await req.json();

    await connectMongo();
    
    console.log("Connected");

    await Brand.create({ industry });
    return NextResponse.json({ message: "Brand created"}, { status: 201 });
}

export async function GET(req: NextRequest) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log("connected")
    const database = client.db("app-data");
    const brands = database.collection("brands");
    const industry = req.nextUrl.searchParams.get('industry');
    console.log("industry is " + industry)
    const allBrands = await brands.aggregate([ 
        {
          $match: {
            Category: { $eq: industry },
            "OG image": { $ne: "" },
          }
        },
        { 
          $sample: { 
            size: 21
          } 
        } 
      ])
      .toArray();

     return NextResponse.json(allBrands);

    } catch (error) {
        console.log( error );
    } finally {
        await client.close();
    }
}

