import { Router } from "express";

const router = Router()

import v1 from './index'


router.use('/', v1)
export default router