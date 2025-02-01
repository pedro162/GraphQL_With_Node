const express = require('express')
const app = express()
const port = 3001

const arrayUsers = [
    {
        id:1,
        nome:'Ana',
        ativo:true,
        email:'marcia@gmail.com',
        role_id:1
    },
    {
        id:2,
        nome:'Marcia',
        ativo:false,
        email:'marcia@gmail.com',
        role_id:2
    }
]

const arrayRules = [
    {
        id:1,
        type:'Docente',
        ativo:true,
    },
    {
        id:2,
        type:'Aluno',
        ativo:false,
    }
]

app.use(express.json());

app.get('/api/users', (request, rest)=>{
    rest.json(arrayUsers)
})

app.get('/api/users/:id', (request, rest)=>{
    rest.json(arrayUsers.find((item)=>item?.id == request.params.id))
})

app.post('/api/users', (request, rest)=>{
    const {nome, email, ativo} = request.body;

    rest.json(
        { message: `Recebi os dados: Nome = ${nome}, Email = ${email}, Ativo = ${ativo}` }
    )
})

app.get('/api/rules', (request, rest)=>{
    rest.json(arrayrules)
})

app.get('/api/rules/:id', (request, rest)=>{
    rest.json(arrayRules.find((item)=>item?.id == request.params.id))
})

app.post('/api/rules', (request, rest)=>{
    const {type, ativo} = request.body;

    rest.json(
        { message: `Recebi os dados: Type = ${type}, Ativo = ${ativo}` }
    )
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})