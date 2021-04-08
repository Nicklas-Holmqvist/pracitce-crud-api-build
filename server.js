const express = require('express');
const app = express()
const port = 3000

// The todo-array
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

app.use(express.static('./public'))
app.use(express.json())

// Show all todos
app.get("/api", (req, res) => {
    res.json(todos)
})

// Create and show one specific todo
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

// Create a new todo
app.post("/api", (req, res) => {

    if(!req.body.title) { res.json("error")}

    const titleToSave = req.body.title
    
    let idToSave = 0
    todos.forEach((todo) => {
        if(todo.id > idToSave) {
            idToSave = todo.id
        }
    }) 

    idToSave++

    todos.push({
        id: idToSave,
        title:titleToSave
    })

    res.json({
        status: "Ny todo sparad!"
    })
})

// Start the server
app.listen(port, (req, res) => {
    console.log('servern är igång på: ' + port)
})

