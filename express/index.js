const express = require('express')
const app = express()
const PORT = (process.env.PORT || 3005)
app.use(express.json())

const notes = [

    {
        "id": "01",
        "title": "Note 1",
        "content": "Content of note 1"
    },

    {
        "id": "02",
        "title": "Note 2",
        "content": "Content of note 2"
    },

    {
        "id": "03",
        "title": "Note 3",
        "content": "Content of note 3"
    },

    {
        "id": "04",
        "title": "Note 4",
        "content": "Content of note 4"
    },

    {
        "id": "05",
        "title": "Note 5",
        "content": "Content of note 5"
    }
]


app.get('/notes', (req, res) => {
    res.json(notes);
})

app.get('/notes/:id', (req,res)=>{

    const id = req.params.id
    const note = notes.find(note => note.id === id)
 
      

    // if(note){
    //     res.json(note)
    // }else{
    //     res.status(404).send("id doesn't exist")
    // }

    note ? res.json(note) : res.status(404).end('Error 404')
})

app.post('/notes/abc', (request, response) => {
    const note = request.body;
    if (!note) {
        console.error('No data received');
        return response.status(400).send('No data received');
    }
    console.log('Received note:', note);
    response.json(note);
});





app.listen(PORT, ()=>{
    console.log(`app listening on http://localhost:${PORT}`)
})


