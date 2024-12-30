const ContainerTypes = {
  // Business Layer
  IProductService: Symbol.for("IProductService"),
  IMaterialService: Symbol.for("IMaterialService"),
  IUserService: Symbol.for("IUserService"),
  IAuthService: Symbol.for("IAuthService"),
  ISupplierService: Symbol.for("ISupplierService"),
  IInventoryMovementService: Symbol.for("IInventoryMovementService"),

  // Data Access Layer
  IProductDal: Symbol.for("IProductDal"),
  IMaterialDal: Symbol.for("IMaterialDal"),
  IUserDal: Symbol.for("IUserDal"),
  ISupplierDal: Symbol.for("ISupplierDal"),
  IInventoryMovementDal: Symbol.for("IInventoryMovementDal"),

  // Controllers
  ProductsController: Symbol.for("ProductsController"),
  MaterialsController: Symbol.for("MaterialsController"),
  UsersController: Symbol.for("UsersController"),
  AuthController: Symbol.for("AuthController"),
  SuppliersController: Symbol.for("SuppliersController"),
  InventoryMovementsController: Symbol.for("InventoryMovementsController"),
};

export default ContainerTypes;
