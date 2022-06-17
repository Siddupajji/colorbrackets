const { validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')
const User = require('../models/model')
const jwt = require('jsonwebtoken')
exports.signup = async(req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return
    }

    const name = req.body.name;
    const email = req.body.email
    const password = req.body.password

    try {
        const hashedpassword = await bcrypt.hash(password, 12)
        const userDetail = {
            name: name,
            email: email,
            password: hashedpassword
        }

        const result = await User.save(userDetail)
        res.status(201).json({ message: 'a new user has been registered' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


exports.login = async(req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.find(email)
        if (user[0].length !== 1) {
            const error = new Error('A user with this email could not be found')
            error.statusCode = 401;
            throw error
        }
        const storedUser = user[0][0]
        const isEqual = await bcrypt.compare(password, storedUser.password)

        if (!isEqual) {
            const error = new Error('Password is incorrect')
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({
            email: storedUser.email,
            userid: storedUser.id
        }, 'secretfortoken', { expiresIn: '1h' })
        res.status(200).json({ token: token, userid: storedUser.id })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    }


}