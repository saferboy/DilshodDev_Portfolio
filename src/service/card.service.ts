import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { CardBody } from "../model/card-dto";
import * as fs from 'fs'


export const createCard = async (id: number,card: CardBody, image: string) => {
    return prisma.card.create({
        data: {
            title: card.title,
            description: card.description,
            link: card.description,
            image: image,
            categoryId: id
        }
    })
}


export const findCard = async (id: number) => {
    return prisma.card.findUnique({
        where: {
            id: id
        }
    })
}

export const updateCard = async (id: number, card: CardBody, image: string) => {
    return prisma.card.update({
        data: {
            title: card.title,
            description:    card.description,
            link: card.link,
            image: image
        },
        where: {
            id: id
        }
    })
}





// export const deletePartById = async (id: number) => {
//     const result = await prisma.part.delete({
//         where: {
//             id: id
//         },
//         include: {
//             System: true
//         }
//     })

//     console.log(result.image)

//    fs.rm(result.image, (error) => {
//     console.log('bla')
//    })

//    return result
// }