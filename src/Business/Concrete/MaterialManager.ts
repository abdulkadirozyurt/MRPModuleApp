import { inject, injectable } from "tsyringe";
import IMaterialDal from "../../DataAccess/Abstract/IMaterialDal";
import IMaterial from "../../Entities/Abstract/IMaterial";
import IMaterialService from "../Abstract/IMaterialService";
import TYPES from "../../Api/IoC/ContainerTypes";
import { FilterQuery } from "mongoose";
import IProduct from "../../Entities/Abstract/IProduct";
import { MaterialMovementTypes } from "../../Utilities/Enums/Material/materialEnums";

@injectable()
export default class MaterialManager implements IMaterialService {
  constructor(@inject(TYPES.IMaterialDal) private readonly _materialDal: IMaterialDal) {}

  public async GetAll(filter?: FilterQuery<IProduct>, populateFields?: string[]): Promise<IMaterial[]> {
    // return await this._materialDal.GetAll({}, ["suppliers"]);
    return await this._materialDal.GetAll(filter, populateFields);
  }

  public async GetById(id: string, populateFields?: string[]): Promise<IMaterial | null> {
    // return await this._materialDal.GetById(id, ["suppliers"]);
    return await this._materialDal.GetById(id, populateFields);
  }

  public async Create(material: IMaterial): Promise<IMaterial> {
    return await this._materialDal.Create(material);
  }

  public async Update(id: string, material: Partial<IMaterial>): Promise<IMaterial | null> {
    return await this._materialDal.Update(id, material);
  }

  public async Delete(id: string): Promise<void> {
    await this._materialDal.Delete(id);
  }

  public async UpdateStock(
    id: string,
    quantity: number,
    movementType: MaterialMovementTypes
  ): Promise<IMaterial | null> {
    return await this._materialDal.UpdateStock(id, quantity, movementType);
  }

  public async TransferStock(
    sourceMaterialId: string,
    targetMaterialId: string,
    quantity: number
  ): Promise<void> {
    await this._materialDal.UpdateStock(sourceMaterialId, quantity, MaterialMovementTypes.OUT);
    await this._materialDal.UpdateStock(targetMaterialId, quantity, MaterialMovementTypes.IN);
  }
}
