import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {

    const industry = req.body;

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

        return {
            props: {
                returnedBrands
            }
        }
    
    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });

    } 
    
}
