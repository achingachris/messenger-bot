import express from 'express'

let configViewEngine = (app) => {
  app.use(express.static('./src/public')) // read images and static files
  app.set('view engine', 'ejs') //setting the view engne as ejs
  app.set('views', './src/views') // the directory where views will be
}

module.exports = configViewEngine
