import { Request, Response, NextFunction } from "express";
import { createCard } from "../../service/card.service";
import { findCategory } from "../../service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id
        const card = req.body

        const findCtg = await findCategory(id)

        if (!findCtg) {
            return res.status(404).json({
                message: `Category not found this ${id}`
            })

        }

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.path

        const option = await createCard(id, card, image)
        return res.status(200).json({
            message: "Card created",
            id: option.id,
            title: option.title,
            description: option.description,
            link: option.link,
            image: image,
            category_id: option.categoryId
        })

    } catch (err) {
        next(err)
    }
}