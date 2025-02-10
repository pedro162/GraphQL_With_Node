const userResolvers = {
    Query:{
        users:(root, args, {dataSources}, info)=>{
            console.log(info)
            return dataSources.usersAPI.getUsers()
        },
        user:(root, {id}, {dataSources})=>{
            return dataSources.usersAPI.getById(id)
        }
    },
    Mutation:{
        adicionaUser:async (root, user, {dataSources})=>{
            return await dataSources.usersAPI.adicionaUser(user)
        },
        atualizaUser:async (root, novosDados, {dataSources})=>{
            return await dataSources.usersAPI.atualizaUser(novosDados)
        },
        deletaUser:async (root, {id}, {dataSources})=>{
            return await dataSources.usersAPI.deletaUser(id)
        }
    }
}

module.exports  = userResolvers;