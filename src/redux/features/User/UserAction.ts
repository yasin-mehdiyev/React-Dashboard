import * as userService from "../../../services/UserService";
import { setUser } from "./UserSlice";

export const fetchUsersData = () => async (dispatch: any) => {
    try {
        const { data }: any = await userService.getUsers();
        dispatch(setUser(data[0]));
    } catch (error) {
        console.log("error", error);
    }
};