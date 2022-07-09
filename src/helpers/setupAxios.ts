import axios from "axios";

const API_KEY: string = "http://178.63.13.157:8090/mock-api/api";

export default axios.create({
    baseURL: API_KEY
});