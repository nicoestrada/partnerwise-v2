import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import { NextApiResponse, NextApiRequest } from "next";

export default async function brandsAPI(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        console.log('Method Not Allowed');
    }

    try {
        await connectMongo();

        const returnedBrands = await Brand.aggregate([
            {
                $match: {
                    Category: "Apparel" // assuming Category is a field in your Brand model
                }
            },
            {
                $sample: {
                    size: 1
                }
            }
        ]);

        return NextResponse.json(returnedBrands);

    } catch (error) {
        console.error(error);
    }
}
