import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

//Brand Schema
const BrandSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  const Brand = mongoose.models.Brand || mongoose.model('Brand', BrandSchema);
  
  export default Brand;