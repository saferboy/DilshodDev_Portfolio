import { Router } from "express";
import { upload } from "../middleware/uplodas";

import createCard from "../controller/card/createCard";
import updateCard from "../controller/card/updateCard";
import findCard from "../controller/card/findCard";

const router = Router()

    .post('/:id', upload.single('image'), createCard)
    .get('/:id', findCard)
    .put('/:id', upload.single('image'), updateCard)

export default router