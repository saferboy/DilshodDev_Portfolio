import { Request, Response, NextFunction } from "express";
import { findCard, updateCard } from "../../service/card.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id
        const cardBody = req.body
        const oldCard = await findCard(id)

        if (!oldCard) {
            return res.status(400).json({
                message: `There's no part this ${id}`
            })
        }

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const newCard = await updateCard(id, cardBody, image)

        return res.status(200).json({
            message: "Card updated",
            id: newCard.id,
            title: newCard.title,
            description: newCard.description,
            link: newCard.link,
            image: newCard.image
        })

    } catch (err) {
        next(err)
    }

}