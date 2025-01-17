import express from "express";
import iocContainer from "../../IoC/Container";
import UsersController from "../Controllers/UsersController";
import { authorize } from "../middlewares/authorize";
import { jwtAuth } from "../middlewares/jwtAuth";
import { UserRoles } from "../../../Utilities/Enums/User/UserRoles";

const router = express.Router();
const usersController = iocContainer.resolve(UsersController);

router.get("/", jwtAuth, authorize([UserRoles.Admin]), usersController.GetAll);
router.get("/id", jwtAuth, authorize([UserRoles.Admin]), usersController.GetById);
router.post("/", jwtAuth, authorize([UserRoles.Admin]), usersController.Create);
router.put("/", jwtAuth, authorize([UserRoles.Admin]), usersController.Update);
router.delete("/", jwtAuth, authorize([UserRoles.Admin]), usersController.Delete);
router.get("/profile", jwtAuth, usersController.getUserProfile);
export default router;
