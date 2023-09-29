import axios from 'axios'

const login = axios.create({
    baseURL: 'http://localhost:3333',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
    }
})

export default login