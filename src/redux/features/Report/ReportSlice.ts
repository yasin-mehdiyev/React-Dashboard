import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';
import ReportModel from '../../../models/Report';

const initialState: ReportModel = {
    groupData: "",
    totalAmount: {},
};

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setGroup: (state, action) => {
            state.groupData = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalAmount = action.payload;
        }
    }
});

export const { setGroup, setTotalPrice } = reportSlice.actions;

export const reportGroup = (state: RootState) => state.report.groupData;
export const totalAmount = (state: RootState) => state.report.totalAmount;

export default reportSlice.reducer;