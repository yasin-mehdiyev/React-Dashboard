interface Gateway {
    gatewayId: string,
    userIds: Array<string>,
    name: string,
    type: string,
};

interface GatewayModel {
    gateways: Gateway[],
};

export default GatewayModel;