import { Request, Response, NextFunction, json } from "express";
import { findCategory, updateCategory } from "../../service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id
        const title = req.body.title
        
        const fined = await findCategory(id)

        if(!fined) {
            return res.status(404).json({
                message: `No category found for id ${fined}`
            })
        }

        const newCategory = await updateCategory(id, title)

        return res.status(200).json({
            message: "Category updated",
            id: newCategory.id,
            title:  newCategory.title
        })

    } catch (err) {
        next(err)
    }
}