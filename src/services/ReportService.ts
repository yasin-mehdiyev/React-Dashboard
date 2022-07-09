import axios from "../helpers/setupAxios";

export async function sendReports(payload: object) : Promise<object> {
    return (await axios.post(`/report`, payload)).data;
};