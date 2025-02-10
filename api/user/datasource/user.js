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

    async adicionaUser(user){
        const users = await this.get('/api/users');
        user.id = users.length + 1;
        const role  = await this.get(`/api/rules?type=${user.role}`)
        await this.post("/api/users", {...user, role:role[0]?.id})

        return ({
            ...user,
            role:role[0]
        })
    } 

    async atualizaUser(novosDados){
        const role = await this.get(`/api/rules?type=${novosDados.role}`)
        await this.put(`/api/users/${novosDados.id}`, {...novosDados, role:role[0]?.id})

        return {
            ...novosDados,
            role:role[0]
        }
    }

    async deletaUser(id){
        await this.delete(`/api/users/${id}`)

        return id
    }
}

module.exports = UsersAPI;