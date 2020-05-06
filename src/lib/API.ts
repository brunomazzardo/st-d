
import axios from "axios"
import Config from '../config'

const { dragon } = Config.api;

const DragonAPI = axios.create({baseURL:dragon});


const users = [{email: "st@teste.com", password: "a"}]

const AuthenticationAPI = {
   login: (email: String, password: String) => {
      return users.find(user => user.email === email && user.password === password)
   }
}

export {
   DragonAPI,
    AuthenticationAPI
}