const http = require('http')
const fs = require('fs')

const PORT = 8002


const server = http.createServer((req,res)=>{

    fs.readFile('todos.json', 'utf-8', (err,data)=>{

        const tasks = JSON.parse(data)
        tasks.map((item)=>({
            id: item.id,
            title: item.title,
            completed: item.completed
        }))


        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(tasks))
    })
})







server.listen(PORT, ()=>{
    console.log(`server listening at ${PORT}`)
})