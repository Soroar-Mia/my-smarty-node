const express = require('express');
const res = require('express/lib/response');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello for World!')
})

const users =[
    {id: 1, name:'sabana', email: 'sabana@gmail.com', phone:'01932410704'},
    {id: 2, name:'shabnoor', email: 'shabnoor@gmail.com', phone:'01932410704'},
    {id: 3, name:'suchorita', email: 'suchorita@gmail.com', phone:'01932410704'},
    {id: 4, name:'suconda', email: 'suconda@gmail.com', phone:'01932410704'},
    {id: 5, name:'sarabonte', email: 'sarabonte@gmail.com', phone:'01932410704'},
    {id: 6, name:'sumona', email: 'sumona@gmail.com', phone:'01932410704'},
    {id: 7, name:'suborna', email: 'suborna@gmail.com', phone:'01932410704'}
]

app.get('/users', (req, res) => {
    
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    const id = req.params.id;
    const user= users[id];
    res.send(user);
})

app.post('/user',(req,res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})