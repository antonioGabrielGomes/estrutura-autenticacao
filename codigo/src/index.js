const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(3000)