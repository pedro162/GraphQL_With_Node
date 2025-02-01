const userResolvers = {
    Query:{
        users:(root, args, {dataSources}, info)=>{
            console.log(info)
            return dataSources.usersAPI.getUsers()
        },
        user:(root, {id}, {dataSources})=>{
            return dataSources.usersAPI.getById(id)
        }
    }
}

module.exports  = userResolvers;