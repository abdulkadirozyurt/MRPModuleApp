import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import ContainerTypes from "../../IoC/ContainerTypes";
import ICustomerOrder from "../../../Entities/Abstract/ICustomerOrder";
import ICustomerOrderService from "../../../Business/Abstract/ICustomerOrderService";

@injectable()
export default class CustomerOrdersController {
  constructor(
    @inject(ContainerTypes.ICustomerOrderService)
    private readonly customerOrderService: ICustomerOrderService
  ) {}

  public GetAll = async (req: Request, res: Response) => {
    try {
      const orders = await this.customerOrderService.GetAll({}, ["products.productId", "customerId"]);
      res.status(200).json({ success: true, message: "All customer orders listed", orders });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public GetById = async (req: Request, res: Response) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: "Order ID is required" });
    }
    try {
      const order = await this.customerOrderService.GetById(id, ["products.productId", "customerId"]);
      if (order) {
        res.status(200).json({ success: true, message: "Customer order details received", order });
      } else {
        res.status(404).json({ success: false, message: "Order not found" });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public Create = async (req: Request, res: Response) => {
    const order: ICustomerOrder = req.body;
    if (!order || !order.products || order.products.length === 0) {
      return res.status(400).json({ success: false, message: "Order details are incomplete" });
    }
    try {
      const createdOrder = await this.customerOrderService.Create(order);
      res.status(200).json({ success: true, message: "Customer order created", order: createdOrder });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public Update = async (req: Request, res: Response) => {
    const { id, ...order } = req.body;
    if (!id || !order) {
      return res.status(400).json({ success: false, message: "Order ID and update details are required" });
    }
    try {
      const updatedOrder = await this.customerOrderService.Update(id, order);
      res.status(200).json({ success: true, message: "Customer order updated", updatedOrder });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public Delete = async (req: Request, res: Response) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: "Order ID is required" });
    }
    try {
      await this.customerOrderService.Delete(id);
      res.status(200).json({ success: true, message: "Customer order deleted" });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}
