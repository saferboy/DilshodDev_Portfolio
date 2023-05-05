import { Request, Response, NextFunction } from "express";
import { findCategory } from "../../service/category.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id

        const fined = await findCategory(id)

        if (!fined) {
            return res.status(400).json({
                message: `No category found for id ${id}`
            })
        }

        return res.status(200).json({
            message: "Retrive Category",
            id: fined.id,
            title: fined.title
        })

    } catch (error) {
        next(error)
    }
}