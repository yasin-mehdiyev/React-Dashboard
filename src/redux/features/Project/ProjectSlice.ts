import { createSlice } from '@reduxjs/toolkit';
import ProjectModel from '../../../models/Project';
import { RootState } from '../../root/store';

const initialState: ProjectModel = {
    projects: [],
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
    }
});

export const { setProjects } = projectSlice.actions;

export const allProjects = (state: RootState) => state.project.projects;

export default projectSlice.reducer;