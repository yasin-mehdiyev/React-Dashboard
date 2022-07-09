import React, { Fragment, useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { totalAmount } from '../../redux/features/Report/ReportSlice';

// Helper Functions
import { calculateFinalTotalAmount } from '../../helpers/helperFunctions';

// Helper CSS
import { alertClasess } from '../../styles/alertClasess';

const SummaryTotal: React.FC = () => {

    const summaryTotal = useSelector(totalAmount);
    const [summaryTotalPrice, setSummaryTotalPrice] = useState<number>(0);

    useEffect(() => {
        let summaryTotalPrice: number = calculateFinalTotalAmount(summaryTotal);
        setSummaryTotalPrice(summaryTotalPrice);
    }, [summaryTotal]);


    return (
        <Fragment>
            <div style={alertClasess.alertWrap}>
                <span style={alertClasess.alertItemChild}>TOTAL: {summaryTotalPrice} USD</span>
            </div>
        </Fragment>
    )
}

export default SummaryTotal;