import * as gatewayService from "../../../services/GatewayService";
import { setGateways } from "./GatewaySlice";

export const fetchGatewaysData = () => async (dispatch: any) => {
    try {
        const { data }: any = await gatewayService.getGateways();
        dispatch(setGateways(data));
    } catch (error) {
        console.log("error", error);
    }
};