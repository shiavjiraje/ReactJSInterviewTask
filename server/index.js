const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000

app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var items = {"min_value": 2, "max_value": 30, "bins": []}


app.post('/bin_features/', async (req, res) => {
  items.bins = req.body.data
  res.send("Record added successfully")
})

app.get('/bin_features/', async (req, res) => {
  res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})