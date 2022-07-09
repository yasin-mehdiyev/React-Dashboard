import { configureStore } from '@reduxjs/toolkit';

// Slices
import uiReducer from "../features/UI/UISlice";
import userReducer from "../features/User/UserSlice";
import gatewayReducer from "../features/Gateway/GatewaySlice";
import projectReducer from "../features/Project/ProjectSlice";
import reportReducer from "../features/Report/ReportSlice";

const store: any = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
        gateway: gatewayReducer,
        project: projectReducer,
        report: reportReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;