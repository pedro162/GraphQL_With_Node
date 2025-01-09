const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')
//const {graphql, buildSchema} = require('graphql')

const schema = gql(`
    type Query{
        olaMundo: String!
    }
`)

const resolvers = {
    Query:{
        olaMundo:()=>'Olá mundo! Nossa primeira consulta :)'
    }
}

const server = new ApolloServer({typeDefs:schema, resolvers})

const app = express()

async function startServer() {
    // Inicializa o servidor Apollo (agora com await)
    await server.start();

    // Aplica a middleware após o servidor ser iniciado
    server.applyMiddleware({app})

    // Inicia o servidor Express
    app.listen({port:4000}, ()=>console.log(`Servidor rodando na porta localhost:4000${server.graphqlPath}`))

}

startServer()