import { NextResponse, NextRequest } from "next/server";
import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export async function getBrands(req: NextRequest, res: NextResponse) {
    const industry = req.query.industry;

    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const allBrands = await Brand.aggregate([
        {
          $match: {
            Category: industry // assuming Category is a field in your Brand model
          }
        },
        { 
          $sample: { 
            size: 21 
          } 
        } 
      ]);
  
      res.json(allBrands);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      mongoose.disconnect();
    }
}
