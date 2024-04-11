import clientPromise from "@/libs/mongo";
import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { industry } = await req.json();

    await connectMongo();
    
    console.log("Connected");

    await Brand.create({ industry });
    return NextResponse.json({ message: "Brand created"}, { status: 201 });
}



export async function GET() {
    await connectMongo();
    console.log("Connected")
    const brands = await Brand.find({});
    return NextResponse.json({ brands })
    // try {
    //     const client = await clientPromise;
    //     const db = client.db("app-data");
    //     const returnedBrands = await db
    //         .collection("brands")
    //         .aggregate([
    //             {
    //                 $match: {
    //                     Category: "Apparel" // assuming Category is a field in your Brand model
    //                 }
    //             },
    //             {
    //                 $sample: {
    //                     size: 1
    //                 }
    //             }
    //         ]);

    //     res.json(returnedBrands);

    // } catch (error) {
    //     console.error(error);
    // }
}
