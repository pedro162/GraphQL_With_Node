const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const userSchema = require('./api/user/schema/user.graphql')
const userResolvers = require('./api/user/resolvers/userResolver.js')
const UsersAPI = require('./api/user/datasource/user.js')

const typeDefs = [userSchema]
const resolvers = [userResolvers]
const server  = new ApolloServer({typeDefs, resolvers, dataSources:()=>{
        return {
            usersAPI: new UsersAPI()
        }
    }
})

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