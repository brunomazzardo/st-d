
import axios from "axios"
import Config from '../config'

const { dragon } = Config.api;

const DragonAPI = axios.create({baseURL:dragon});

export {
   DragonAPI
}