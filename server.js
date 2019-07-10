import express from 'express'
import routes from './src/routes/usertableRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const { check } = require('express-validator/check')
 
const app = express()
const PORT = 3000
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todo-app')
// mongoose.connect('mongodb://user:password@ds239648.mlab.com:39648/db_name')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})