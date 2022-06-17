const express = require('express')

const { body } = require('express-validator')

const router = express.Router()
const authController = require('../controller/auth')
const User = require('../models/model')

router.post(
    '/signup', [body('name').trim().notEmpty(),
        body('email').isEmail().withMessage('You have entered wrong Email....')
        .custom(async(email) => {
            const user = await User.find(email)
            if (user[0].length > 0) {
                return Promise.reject('Email already Exist..')
            }
        }).normalizeEmail(),
        body('password').trim().isLength({ min: 2 })
    ], authController.signup
)


router.post(
    '/login',

    authController.login)

module.exports = router