// Supplier.ts
import mongoose, { Schema } from "mongoose";
import ISupplier from "../Abstract/ISupplier";

const supplierSchema = new Schema<ISupplier>(
  {
    companyName: { type: String, required: true },
    contactName: String,
    contactTitle: String,
    address: String,
    city: String,
    country: String,
    phone: String,
    email: String,
    materialsOfSupplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],
  },
  { timestamps: true }
);

export const Supplier = mongoose.model<ISupplier>("Supplier", supplierSchema);
