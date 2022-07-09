import { createSlice } from '@reduxjs/toolkit';
import GatewayModel from '../../../models/Gateway';
import { RootState } from '../../root/store';

const initialState: GatewayModel = {
    gateways: [],
};

export const gatewaySlice = createSlice({
    name: 'gateway',
    initialState,
    reducers: {
        setGateways: (state, action) => {
            state.gateways = action.payload;
        },
    }
});

export const { setGateways } = gatewaySlice.actions;

export const allGateways = (state: RootState) => state.gateway.gateways;

export default gatewaySlice.reducer;