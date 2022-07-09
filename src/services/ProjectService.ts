import axios from "../helpers/setupAxios";

export async function getProjects() : Promise<object> {
    return (await axios.get(`/projects`)).data;
};