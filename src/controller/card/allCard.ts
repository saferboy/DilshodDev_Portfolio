import { Request, Response, NextFunction } from "express";
import { getAllCard } from "../../service/card.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const cards = await getAllCard()

        const mapped = cards.map(card => {
            return {
                categoryId: card.categoryId,
                id: card.id,
                title: card.title,
                description: card.description,
                link: card.link,
                image: card.image,
            }
        })

        return res.status(200).json({
            message: 'All cards retrived',
            mapped
        })

    } catch (err) {
        next(err)
    }

}
