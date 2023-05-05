import { Router } from "express";

import createCategory from "../controller/category/createCategory";
import findCategory from "../controller/category/findCategory";
import getAllCategory from "../controller/category/getAllCategory";
import updatecategory from "../controller/category/updatecategory";
import deleteCategory from "../controller/category/deleteCategory";

const router = Router()

    .post('/', createCategory)
    .get('/:id', findCategory)
    .get('/', getAllCategory)
    .put('/:id', updatecategory)
    .delete('/:id', deleteCategory)

export default router