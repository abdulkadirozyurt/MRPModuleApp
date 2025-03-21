import mongoose, { Document } from "mongoose";
import IModel from "../../Core/Entities/Abstract/IModel";
import IBillOfMaterials from "./IBillOfMaterials";

export default interface IProduct extends IModel, Document {
  name: string;
  description: string;
  unitType: string;
  billOfMaterials: {
    materialId: mongoose.Types.ObjectId;
    quantity: number;
  }[];
}
