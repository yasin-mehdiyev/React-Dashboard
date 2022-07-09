import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { allGateways } from '../../redux/features/Gateway/GatewaySlice';
import { allProjects } from '../../redux/features/Project/ProjectSlice';
import { reportGroup, setTotalPrice } from '../../redux/features/Report/ReportSlice';
import { modeAccordion, showTableColumn } from '../../redux/features/UI/UISlice';

// Helper Functions
import { calculateTotalAmountByField } from '../../helpers/helperFunctions';

const TableDataItem: React.FC<{ item: any }> = ({ item }) => {

    const dispatch = useDispatch<any>();
    const isShownTableColumn = useSelector(showTableColumn);
    const accordionMode = useSelector(modeAccordion);
    const projects = useSelector(allProjects);
    const gateways = useSelector(allGateways);
    const reportGrouping = useSelector(reportGroup);

    const [renderData, setRenderData] = useState<any>([]);

    useEffect(() => {
        if (reportGrouping !== '') {
            let totalAmount: number;
            if (accordionMode === 1) {
                totalAmount = calculateTotalAmountByField(reportGrouping, gateways, "gatewayId");
            } else {
                totalAmount = calculateTotalAmountByField(reportGrouping, projects, "projectId");
            }
            dispatch(setTotalPrice(totalAmount));
            reportGrouping[item] !== undefined && setRenderData(reportGrouping[item]);
        }
    }, [reportGrouping]);

    return (
        <>
            <thead>
                <tr>
                    <th>Date</th>
                    {
                        isShownTableColumn ? <th>Gateway</th> : null
                    }
                    <th>Transaction ID</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>

                {
                    renderData?.length > 0 ? (
                        renderData?.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="date">{item.created.split("-")[2] + "/" + item.created.split("-")[1] + "/" + item.created.split("-")[0]}</td>
                                {
                                    isShownTableColumn ? <td>{gateways.find((element: any) => element.gatewayId === item.gatewayId).name}</td> : null
                                }
                                <td>{item.paymentId}</td>
                                <td>{`${Math.round(item.amount)} USD`}</td>
                            </tr>
                        ))
                    ) : null
                }
            </tbody>
        </>
    )
}

export default TableDataItem;