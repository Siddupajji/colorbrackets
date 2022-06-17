const express = require('express')

const bodyParser = require('body-parser')

const postRoutes = require('./routes/posts')

const authRoutes = require('./routes/auth')

// var cors = require('cors')

const port = process.env.Port || 3000

const app = express()


app.use(bodyParser.json())

app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();


    })
    // app.use(cors)
app.use('/auth', authRoutes)

app.use('/posts', postRoutes)

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})