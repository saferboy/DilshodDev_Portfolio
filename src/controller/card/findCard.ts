import { Request, Response, NextFunction } from "express";
import { findCard } from "../../service/card.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const fined = await findCard(id)

        if (!fined) {
            return res.status(400).json({
                message: `No card found for id ${id}`
            })
        }

        return res.status(200).json({
            message: "Retrive Card",
            id: fined.id,
            title: fined.title,
            description: fined.description,
            link: fined.link,
            image: fined.image
        })

    } catch (err) {
        next(err)
    }

}