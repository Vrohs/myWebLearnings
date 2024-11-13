const fs = require('fs')
const filePath = './tasks.json'


const command = process.argv[2];
const argument = process.argv[3];


const addTask = ()=>{
    try{
        
    }
}



if(command === 'add'){
    addTask(argument)
}else if(command === 'remove'){
    deleteTask(parseInt(args))
}else if(command === 'print'){
    consoleTasks()
}else{
    console.log(`${command} not found :(`)
}