import express from 'express'
import { getAllUsers, login, register } from '../Controllers/authController.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)


export default router