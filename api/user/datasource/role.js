const {RESTDataSource} = require('apollo-datasource-rest')

class RoleAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'http://localhost:3001'
    }

    async getRole(){
        return this.get('/api/roles')
    }

    async getById(id){
        return this.get('/api/roles/'+id)
    }

}

module.exports = RoleAPI;