import mongoose, { Document } from "mongoose";
import IModel from "../../Core/Entities/Abstract/IModel";

export interface IOrder extends IModel, Document {
  status: string;
  products: {
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }[];
}
