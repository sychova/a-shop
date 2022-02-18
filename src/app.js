const express = require('express')
const path = require('path')
const hbs = require('hbs')
const router = require('../config/router')

const app = express()

app.use(router)

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

module.exports = app
