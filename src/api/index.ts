import { Router } from "express";

import category from './category'
import card from './card'

const router = Router()

    .use('/category', category)
    .use('/card', card)

export default router