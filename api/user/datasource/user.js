const {RESTDataSource} = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'http://localhost:3001'
    }

    async getUsers(){
        const users = await this.get('/api/users')

        return users.map(async (item, index, arr)=>{
            return {
                ...item,
                rule: await this.get('/api/rules/'+item.role_id)
            }
        })
    }

    async getById(id){
        const user = await this.get('/api/users/'+id)
        user.role = await this.get('/api/rules/'+user.role_id)
        return user;
    }

}

module.exports = UsersAPI;