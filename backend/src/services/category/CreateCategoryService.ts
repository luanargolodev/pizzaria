import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if(name === '') {
      throw new Error('Nome inválido.');
    }

    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name: name
      }
    });
    if(categoryAlreadyExists) {
      throw new Error(`A categoria ${name} já existe.`);
    }

    const category = await prismaClient.category.create({
      data: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    })

    return category;
  }
}

export { CreateCategoryService };