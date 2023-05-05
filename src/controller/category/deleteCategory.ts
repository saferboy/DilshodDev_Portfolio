import { Request, Response, NextFunction } from "express";
import { removeCategory, findCategory } from "../../service/category.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id
        const fined = await findCategory(id)

        if (!fined) {
            return res.status(404).json({
                message: `No category found for id ${id}`
            })
        }

        const remove = await removeCategory(id)

        return res.status(200).json({
            message: "Category deleted",
            id: remove.id,
            title: remove.title
        })

    } catch (err) {
        next(err)
    }
}