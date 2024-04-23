import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

//Brand Schema
const BrandSchema = new mongoose.Schema({
    "URL": String,
    "Store name": String,
    "Category": String,
    "Monthly traffic estimate (from Similarweb)": String,
    "Estimated annual revenue (lower bound)": String,
    "Number of employees": Number || null,
    "Founded year": Number || null,
    "Number of products listed": String,
    "Average product price": String || Number || null,
    "Currency": String,
    "Uses Shopify Plus?": String,
    "Apps and technologies used": String,
    "Emails from website": String,
    "Phone numbers from website": String,
    "Meta title": String,
    "Meta description": String,
    "OG image": String,
    "LinkedIn page URL": String,
    "Instagram page URL": String,
    "Instagram followers": String,
    "Facebook page URL": String,
    "Pinterest page URL": String,
    "YouTube page URL": String,
    "TikTok page URL": String,
  });
  

  BrandSchema.plugin(toJSON);
  export default mongoose.models.Brand || mongoose.model("Brand", BrandSchema);
