import { container as iocContainer } from "tsyringe";
import ProductsController from "../Concrete/Controllers/ProductsController";
import MaterialsController from "../Concrete/Controllers/MaterialsController";
import ProductManager from "../../Business/Concrete/ProductManager";
import IProductService from "../../Business/Abstract/IProductService";
import IProductDal from "../../DataAccess/Abstract/IProductDal";
import ProductDal from "../../DataAccess/Concrete/Mongoose/ProductDal";
import IMaterialService from "../../Business/Abstract/IMaterialService";
import MaterialManager from "../../Business/Concrete/MaterialManager";
import IMaterialDal from "../../DataAccess/Abstract/IMaterialDal";
import MaterialDal from "../../DataAccess/Concrete/Mongoose/MaterialDal";
import TYPES from "./Types";
import IUserDal from "../../DataAccess/Abstract/IUserDal";
import UserDal from "../../DataAccess/Concrete/Mongoose/UserDal";
import UsersController from "../Concrete/Controllers/UsersController";
import IUserService from "../../Business/Abstract/IUserService";
import UserManager from "../../Business/Concrete/UserManager";
import IAuthService from "../../Business/Abstract/IAuthService";
import AuthManager from "../../Business/Concrete/AuthManager";
import AuthController from "../Concrete/Controllers/AuthController";
import { Supplier } from "../../Entities/Concrete/Supplier";
import ISupplierDal from "../../DataAccess/Abstract/ISupplierDal";
import SupplierDal from "../../DataAccess/Concrete/Mongoose/SupplierDal";
import ISupplierService from "../../Business/Abstract/ISupplierService";
import SupplierManager from "../../Business/Concrete/SupplierManager";
import SuppliersController from "../Concrete/Controllers/SuppliersController";

// singleton sadece bir kere oluşturulur ve her seferinde aynı nesne döner
iocContainer.registerSingleton(TYPES.ProductsController, ProductsController);
iocContainer.registerSingleton(TYPES.MaterialsController, MaterialsController);
iocContainer.registerSingleton(TYPES.UsersController, UsersController);
iocContainer.registerSingleton(TYPES.AuthController, AuthController);
iocContainer.registerSingleton(TYPES.SuppliersController, SuppliersController);

// business
iocContainer.registerSingleton<IProductService>(TYPES.IProductService, ProductManager);
iocContainer.registerSingleton<IMaterialService>(TYPES.IMaterialService, MaterialManager);
iocContainer.registerSingleton<IUserService>(TYPES.IUserService, UserManager);
iocContainer.registerSingleton<IAuthService>(TYPES.IAuthService, AuthManager);
iocContainer.registerSingleton<ISupplierService>(TYPES.ISupplierService, SupplierManager);

//data access
iocContainer.registerSingleton<IProductDal>(TYPES.IProductDal, ProductDal);
iocContainer.registerSingleton<IMaterialDal>(TYPES.IMaterialDal, MaterialDal);
iocContainer.registerSingleton<IUserDal>(TYPES.IUserDal, UserDal);
iocContainer.registerSingleton<ISupplierDal>(TYPES.ISupplierDal, SupplierDal);

export default iocContainer;
