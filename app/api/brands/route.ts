import clientPromise from "@/libs/mongo";
import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { industry } = await req.json();

    await connectMongo();
    
    console.log("Connected");

    await Brand.create({ industry });
    return NextResponse.json({ message: "Brand created"}, { status: 201 });
}



export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI);
  // const brands = JSON.parse(req.query.brands);

  const industry = "Apparel";

  try {
    await client.connect();
    const database = client.db("app-data");
    const brands = database.collection("brands");

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

