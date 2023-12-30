import express from 'express'
import * as user from '../controller/userController.js'

const router = express.Router()

router.get('/user',user.getAll)
router.get('/user/:id',user.getById)
router.post('/user',user.add)
router.put('/user',user.update)