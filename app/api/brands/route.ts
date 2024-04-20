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

export async function GET(req: NextRequest) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log("connected")
    const database = client.db("app-data");
    const brands = database.collection("brands");
    const industry = req.nextUrl?.searchParams?.get('industry');
    const url = req.nextUrl?.searchParams?.get('URL');
    const avgProductPrice = req.nextUrl?.searchParams?.get('avgProductPrice');

    console.log("industry is ", industry)
    console.log("URL is ", url)
    console.log("Avg Product Price is ", avgProductPrice);

    if (avgProductPrice) {
      const allBrands = await brands.aggregate([
        { 
          $match: {
            'Average product price': { // Assuming 'Average product price' is a field within 'Category' document
              $lt: avgProductPrice
            },
            "OG image": { $ne: "" }
          }
        },
        { $sample: { size: 21 } }
      ]).toArray();
      return new NextResponse(JSON.stringify(allBrands), { status: 200 });
    } else if (industry) {
      const allBrands = await brands.aggregate([
        { $match: { Category: { $eq: industry }, "OG image": { $ne: "" } }}, { $sample: { size: 21 }}
      ]).toArray();
      return new NextResponse(JSON.stringify(allBrands), { status: 200 });
    } else if (url) {
      const findOneBrand = await brands.findOne({ URL: { $eq: url } });
      return new NextResponse(JSON.stringify(findOneBrand), { status: 200 });
    } else {
      return new NextResponse('No industry or URL specified', { status: 400 });
    }
  
    } catch (error) {
        console.log( error );
    } finally {
        await client.close();
    }
}

