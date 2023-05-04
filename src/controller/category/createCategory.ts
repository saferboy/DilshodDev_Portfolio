import { Request, Response, NextFunction } from "express";
import { createCategory } from "../../service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const title = req.body.title

        const newCtg = await createCategory(title)

        return res.status(200).json({
            message: "Category createed",
            category:{
                id: newCtg.id,
                title:  newCtg.title
            }
        })

    } catch (error) {
        next(error)
    }
}