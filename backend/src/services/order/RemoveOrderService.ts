import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({order_id}: OrderRequest) {
    const alreadyExists = await prismaClient.order.findFirst({
      where: {
        id: order_id
      }
    });
    if(!alreadyExists) {
      throw new Error("Não existe nenhum com esse id");
    }

    const order = await prismaClient.order.delete({
      where: {
        id: order_id
      }
    });

    return order;
  }
}

export { RemoveOrderService }