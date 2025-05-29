require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000;

// Connect to MongoDB 
mongoose.connect(process.env.MONGOOSE_URL)

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Middleware
app.use(express.json())

// Setup Routes!
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => {
  console.log(`App is listening on server ${PORT}`) 
})