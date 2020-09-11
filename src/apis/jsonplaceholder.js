import axios from 'axios';

class Client {
    constructor(){
        this.client = axios.create({
            baseURL:'https://jsonplaceholder.typicode.com'
        });
    }
    getPosts(){
        return this.client.get("/posts").then((response)=>response.data).catch(e=>console.log(e.message));
    }
    getUser(id) {
        return this.client.get(`/users/${id}`).then((response)=>response.data).catch(e=>console.log(e.message));
    }
}

export default new Client();