window.addEventListener("load", initSite)

// Function to run all api requests
async function initSite() {
    console.log("init")
    const todos = await getAllTodos()
    const todo = await getSpecific(2)
    const newTodo = await saveNewTodo("Köra bil")

    console.log(todos)
    console.log(todo)
    console.log(newTodo)
}

// Function to get all todos from api function makeRequest
async function getAllTodos() {
   const todos = await makeRequest("/api", "GET")
   return todos
}

// Function to get one todo from api function makeRequest
async function getSpecific(id) {
    const todo = await makeRequest("/api/"+id, "GET")
    return todo
}

// Function to add one todo to api function makeRequest
async function saveNewTodo(title) {

    const body = {title: "hej"}

    const status = await makeRequest("/api", "POST", body)
    return status
}

// Function to get the api data
async function makeRequest(url, method, body) {

    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()    
    console.log(response)

    return data
}