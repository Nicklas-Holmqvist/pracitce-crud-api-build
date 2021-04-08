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

    const foundTodo = todos.find((todo) => {
        return todo.id == id
    })

    if(!foundTodo) {
        res.json("error")
    }

    console.log(foundTodo)

    res.json(foundTodo)
})

app.post("/api", (req, res) => {
    const title = req.body.title
    
    let id = 0
    todos.forEach((todo) => {
        if(todo.id > id) {
            id = todo.id
        }
    }) 

    id++

    console.log(id)

    res.json(title)
})



app.listen(port, (req, res) => {
    console.log('servern är igång på: ' + port)
})

