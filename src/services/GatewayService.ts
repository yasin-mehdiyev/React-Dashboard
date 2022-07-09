import axios from "../helpers/setupAxios";

export async function getGateways() : Promise<object> {
    return (await axios.get(`/gateways`)).data;
};