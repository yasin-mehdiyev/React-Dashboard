import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { modeAccordion } from '../../redux/features/UI/UISlice';
import { allProjects } from '../../redux/features/Project/ProjectSlice';
import { allGateways } from '../../redux/features/Gateway/GatewaySlice';
import { reportGroup } from '../../redux/features/Report/ReportSlice';

// Utilities Functions
import { calculatePercentOfDatas, formalizeDataSetArray, formalizeLabelArray } from '../../helpers/helperFunctions';

// Chart Libraries
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {

    const accardionModeVersion = useSelector(modeAccordion);
    const projects = useSelector(allProjects);
    const gateways = useSelector(allGateways);
    const allReports = useSelector(reportGroup);

    const [chartLabel, setChartLabel] = useState<Array<string>>([]);
    const [chartDataset, setChartDataset] = useState<Array<number>>([]);

    useEffect(() => {
        (function init() {
            let labels;
            let dataSet;
            if (accardionModeVersion === 1) {
                labels = formalizeLabelArray(gateways);
                dataSet = formalizeDataSetArray(gateways, allReports, "gatewayId");
            } else {
                labels = formalizeLabelArray(projects);
                dataSet = formalizeDataSetArray(projects, allReports, "projectId");
            }
            setChartLabel(labels);
            setChartDataset(calculatePercentOfDatas(dataSet));
        })();
    }, [allReports]);


    const data: any = {
        labels: chartLabel,
        datasets: [
            {
                data: chartDataset,
                backgroundColor: [
                    '#F24E1E',
                    '#A259FF',
                ],
                borderColor: [
                    '#F24E1E',
                    '#A259FF',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                <div style={{ width: '70%' }}>
                    <Doughnut data={data} options={{ responsive: true }} />
                </div>
            </div>
        </>
    )
}

export default PieChart;