import "reflect-metadata";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./src/Api/Concrete/Routers/UserRouter";
import authRouter from "./src/Api/Concrete/Routers/AuthRouter";
import productRouter from "./src/Api/Concrete/Routers/ProductRouter";
import materialRouter from "./src/Api/Concrete/Routers/MaterialRouter";
import supplierRouter from "./src/Api/Concrete/Routers/SupplierRouter";
import DbConfig from "./src/DataAccess/Concrete/Mongoose/Config/DbConfig";
import customerOrdersRouter from "./src/Api/Concrete/Routers/CustomerOrdersRouter";
import supplierOrdersRouter from "./src/Api/Concrete/Routers/SupplierOrdersRouter";
import customerRouter from "./src/Api/Concrete/Routers/CustomerRouter";



dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: "GET,PUT,POST,DELETE,PATCH",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/materials", materialRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/orders/customer-orders", customerOrdersRouter);
app.use("/api/orders/supplier-orders", supplierOrdersRouter);
app.use("/api/customers", customerRouter);

async function startServer() {
  try {
    await DbConfig.ConnectDb();
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    });
  } catch (error) {
    console.error("Veritabanı bağlantısı başarısız oldu:", error);
    process.exit(1); // Uygulamayı sonlandır
  }
}

startServer();

// app.listen(PORT, () => {
//   DbConfig.ConnectDb();
//   console.log(`Server is running on port ${PORT}`);
// });
