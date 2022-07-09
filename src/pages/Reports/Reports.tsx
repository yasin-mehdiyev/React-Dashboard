import React, { Fragment, useCallback, useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { allGateways } from '../../redux/features/Gateway/GatewaySlice';
import { allProjects } from '../../redux/features/Project/ProjectSlice';
import { setGroup } from '../../redux/features/Report/ReportSlice';
import { columnSize, modeAccordion, setColumn, setAccordionMode, setUIMode, uiMode, setAlertMode, alertMode, setShowTableColumn, hasAccessRequest, setHasAccessRequest } from '../../redux/features/UI/UISlice';

// Components
import AccordionItem from '../../components/Accordion/AccordionItem';
import CardLayout from '../../components/Wrapper/CardLayout/CardLayout';
import FormButton from '../../components/HOC/Button';
import Datepicker from '../../components/HOC/Datepicker';
import Select from '../../components/HOC/Select';
import SummaryTotal from '../../components/Summary/SummaryTotal';
import ChartLayout from '../../components/Wrapper/ChartLayout/ChartLayout';
import ChartDiagram from '../../components/Chart/Chart';
import TableLayout from '../../components/Wrapper/TableLayout/TableLayout';
import TableDataItem from '../../components/TableData/TableDataItem';
import NoDataLayout from '../../components/Wrapper/NoDataLayout/NoDataLayout';
import NoData from '../../components/NoData/NoData';

// Services (HTTP Requests)
import * as reportService from "../../services/ReportService";

// Helper CSS
import { classes } from '../../styles/styleClasses';

// Helper Functions
import { groupingByData, sortingToDate } from '../../helpers/helperFunctions';

// Constants File
import { noDatas } from '../../helpers/constants';

const Reports: React.FC = () => {

    const dispatch = useDispatch<any>();
    const column = useSelector(columnSize);
    const mode = useSelector(uiMode);
    const alertModeVersion = useSelector(alertMode);
    const accordionMode = useSelector(modeAccordion);
    const projects = useSelector(allProjects);
    const gateways = useSelector(allGateways);
    const isAccessRequest = useSelector(hasAccessRequest);

    const [openItemList, setOpenItemList] = useState<any>([projects[0].projectId]);
    const [data, setData] = useState<any>({
        projectId: "",
        gatewayId: "",
        from: "",
        to: ""
    });
    const [isExistData, setIsExistData] = useState<boolean>(false);

    const getInitialValues = (): any => {
        getAllReports(data);
        dispatch(setAccordionMode(0));
        dispatch(setColumn("12"));
        dispatch(setUIMode(false));
        dispatch(setAlertMode(false));
        dispatch(setShowTableColumn(true));
    };

    const makeColumnMode = (): void => {
        if ((data.projectId !== "" && data.gatewayId === "") || (data.projectId === "" && data.gatewayId !== "")) {
            dispatch(setColumn("6"));
            dispatch(setAlertMode(true));
        } else {
            dispatch(setColumn("12"));
            dispatch(setAlertMode(false));
        };
    };

    const makeUIMode = (): void => {
        if (data.projectId !== "" && data.gatewayId !== "") {
            dispatch(setUIMode(true));
        }
    };

    const makeShownTableColumns = (): void => {
        if (!(data.projectId === "" && data.gatewayId === "")) {
            dispatch(setShowTableColumn(false));
        }
    };

    const getAllReports = useCallback(async (payload: object, field = "projectId"): Promise<any> => {
        if (!isAccessRequest) {
            return;
        }

        const { data }: any = await reportService.sendReports(payload);
        const datas: any = sortingToDate(data);
        dispatch(setGroup(groupingByData(datas, field)));

        if (!datas.length) {
            setIsExistData(true);
        } else {
            setIsExistData(false);
        }

    }, [isAccessRequest]);


    const handleSubmit = (e: any): any => {
        e.preventDefault();

        const payload = {
            projectId: data?.projectId?.projectId,
            gatewayId: data?.gatewayId?.gatewayId,
            from: data?.from,
            to: data?.to,
        };

        if (data.projectId !== "" && data.gatewayId === "") {
            dispatch(setAccordionMode(1));
            setOpenItemList([gateways[0].gatewayId]);
            getAllReports(payload, "gatewayId");
        } else {
            dispatch(setAccordionMode(0));
            getAllReports(payload);
        }

        makeColumnMode();
        makeUIMode();
        makeShownTableColumns();
        dispatch(setHasAccessRequest(false));
    };

    useEffect(() => {
        getInitialValues();
    }, [dispatch]);

    let renderingData: Array<any> = accordionMode === 0 ? projects : gateways;
    let renderingDataFieldName: string = accordionMode === 0 ? "projectId" : "gatewayId";

    return (
        <Fragment>
            <section className="report-header d-flex justify-content-between align-items-center">

                <section className="title">
                    <h4 style={classes.reportTitle}>Reports</h4>
                    <p style={classes.reportText}>Easily generate a report of your transactions</p>
                </section>

                <section className="generate-report">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <div style={classes.marginRight}>
                            <Select data={projects} name="projectId" value={data} setValue={setData} initialTitle="All projects" />
                        </div>
                        <div style={classes.marginRight}>
                            <Select data={gateways} name="gatewayId" value={data} setValue={setData} initialTitle="All gateways" />
                        </div>
                        <div style={classes.marginRight}>
                            <Datepicker placeholder="Date from" name="from" datepicker={data} setDatepicker={setData} />
                        </div>
                        <div style={classes.marginRight}>
                            <Datepicker placeholder="Date to" name="to" datepicker={data} setDatepicker={setData} />
                        </div>

                        <div className="generate-report-btn">
                            <FormButton />
                        </div>
                    </form>
                </section>
            </section>

            <section className="report-body">
                <div className="row">

                    {
                        !isExistData ? (
                            <>
                                <CardLayout col={column} projectName={data.projectId} gatewayName={data.gatewayId}>
                                    {
                                        !mode ? (
                                            <AccordionItem data={renderingData} dataFieldName={renderingDataFieldName} openItemList={openItemList} setOpenItemList={setOpenItemList} />
                                        ) : (
                                            <div className="table-main">
                                                <TableLayout>
                                                    <TableDataItem item={data.projectId.projectId} />
                                                </TableLayout>
                                            </div>
                                        )
                                    }
                                </CardLayout>

                                {
                                    alertModeVersion ? (
                                        <ChartLayout col={column}>
                                            <ChartDiagram />
                                            <SummaryTotal />
                                        </ChartLayout>
                                    ) : null
                                }
                            </>
                        ) : (
                            <NoDataLayout>
                                <NoData data={noDatas} />
                            </NoDataLayout>
                        )
                    }
                </div>
            </section>

            {
                !alertModeVersion && !isExistData ? (
                    <SummaryTotal />
                ) : null
            }


        </Fragment>
    )
}

export default Reports;