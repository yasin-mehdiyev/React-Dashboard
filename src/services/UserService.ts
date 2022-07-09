import axios from "../helpers/setupAxios";

export async function getUsers() : Promise<object> {
    return (await axios.get(`/users`)).data;
};