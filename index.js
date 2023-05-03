const express = require('express')
const app = express()

const cors = require('cors')
const categories = require('./data/categories.json')
// const port = process.ENV.PORT || 5000
const port = 5000
app.use(cors())

app.get ('/', (req, res) => {
    res.send('Dragon is coming')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen( port , () =>{
    console.log(`Dragon API is running on : ${port}`);
})