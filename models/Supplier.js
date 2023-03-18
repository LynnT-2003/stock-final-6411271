import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
  },
  { strict: false }
);

module.exports =
  mongoose.models.supplier || mongoose.model("supplier", SupplierSchema);
