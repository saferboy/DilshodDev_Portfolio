import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()



export const createCategory = async (title: string) => {
    return prisma.category.create({
        data: {
            title:  title
        }
    })
}

export const findCategory = async (id: number) => {
    return prisma.category.findUnique({
        where: {
            id: id
        }
    })
}

export const getAllCategory = async () => {
    return prisma.category.findMany()
}

export const updateCategory = async (id:number, title: string) => {
    return prisma.category.update({
        data: {
            title: title
        },
        where:  {
            id: id
        }
    })
}

export const removeCategory = async (id: number) => {
    return prisma.category.delete({
        where:  {
            id: id
        }
    })
}