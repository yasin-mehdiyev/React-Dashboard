import * as projectService from "../../../services/ProjectService";
import { setProjects } from "./ProjectSlice";

export const fetchProjectsData = () => async (dispatch: any) => {
    try {
        const { data }: any = await projectService.getProjects();
        dispatch(setProjects(data));
    } catch (error) {
        console.log("error", error);
    }
};