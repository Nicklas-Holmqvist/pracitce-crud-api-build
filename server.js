const express = require('express');
const app = express()
const port = 3000

const todos = [
    {
        "id": 1,
        "title": "städa"
    },
    {
        "id": 2,
        "title": "handla"
    },
    {
        "id": 3,
        "title": "sola"
    }
]

app.use(express.json())

app.get("/api", (req, res) => {
    res.json('Hej, välkommen!')
})

app.get("/api/:id", (req, res) => {
    const id = req.params.id
    res.json("GET: " + id)
})

app.post("/api", (req, res) => {
    const body = req.body.test
    res.json(body)
})



app.listen(port, (req, res) => {
    console.log('servern är igång på: ' + port)
})

