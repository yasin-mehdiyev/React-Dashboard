import { createSlice } from '@reduxjs/toolkit';
import UIModel from '../../../models/UI';
import { RootState } from '../../root/store';

const initialState: UIModel = {
    isOpen: false,
    accordionMode: 0, // 0 - Project Base, 1 - Gateway Base
    columnMode: "12",
    uiMode: false,
    alertMode: false,
    showTableColumn: true,
    hasAccessRequest: true,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setToggler: (state, action) => {
            state.isOpen = action.payload;
        },
        setAccordionMode: (state, action) => {
            state.accordionMode = action.payload;
        },
        setColumn: (state, action) => {
            state.columnMode = action.payload;
        },
        setUIMode: (state, action) => {
            state.uiMode = action.payload;
        },
        setAlertMode: (state, action) => {
            state.alertMode = action.payload;
        },
        setShowTableColumn: (state, action) => {
            state.showTableColumn = action.payload;
        },
        setHasAccessRequest: (state, action) => {
            state.hasAccessRequest = action.payload;
        },
    }
});

export const { setToggler, setAccordionMode, setColumn, setUIMode, setAlertMode, setShowTableColumn, setHasAccessRequest } = uiSlice.actions;

export const isOpen: any = (state: RootState) => state.ui.isOpen;
export const modeAccordion: any = (state: RootState) => state.ui.accordionMode;
export const columnSize: any = (state: RootState) => state.ui.columnMode;
export const uiMode: any = (state: RootState) => state.ui.uiMode;
export const alertMode: any = (state: RootState) => state.ui.alertMode;
export const showTableColumn: any = (state: RootState) => state.ui.showTableColumn;
export const hasAccessRequest: any = (state: RootState) => state.ui.hasAccessRequest;

export default uiSlice.reducer;