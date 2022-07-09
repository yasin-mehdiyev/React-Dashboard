import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { totalAmount } from '../../redux/features/Report/ReportSlice';
import { modeAccordion } from '../../redux/features/UI/UISlice';

// Components
import TableLayout from '../Wrapper/TableLayout/TableLayout';
import TableDataItem from '../TableData/TableDataItem';

// UI Frameworks (Reactstrap)
import { Collapse } from "reactstrap";

// Module CSS
import accordion from '../../styles/modules/accordion.module.css';

// Helper CSS
import { classes } from '../../styles/styleClasses';

const AccordionItem: React.FC<{ data: any, openItemList: any, setOpenItemList: any, dataFieldName: string }> = ({ data, openItemList, setOpenItemList, dataFieldName }) => {

    // Mode 0 - Accordion Title is Project Base, Mode 1 - Gateway Base
    const accordionMode = useSelector(modeAccordion);
    const totalPrice = useSelector(totalAmount);

    const isOpen = (id: string) => openItemList.includes(id);

    const handleToggle = (id: string) => {
        let newItemList;

        if (isOpen(id)) {
            newItemList = openItemList.filter((x: any) => x !== id);
        }
        else {
            newItemList = [...openItemList, id];
        }

        setOpenItemList(newItemList);
    };

    return (
        <>
            {
                data?.length > 0 ? (
                    data?.map((item: any, index: number) => (
                        <div className="acc-item" key={index}>

                            <div className={accordion.accordionItemTitle} onClick={() => {
                                accordionMode === 0 ? handleToggle(item.projectId) : handleToggle(item.gatewayId)
                            }}>
                                <span style={classes.commonBoxStyle}>{item.name}</span>
                                <span style={classes.commonBoxStyle}>TOTAL: {totalPrice[item[dataFieldName]]} USD</span>
                            </div>

                            <Collapse isOpen={accordionMode === 0 ? isOpen(item.projectId) : isOpen(item.gatewayId)}>
                                <div className="table-main">
                                    <TableLayout>
                                        <TableDataItem item={accordionMode === 0 ? item.projectId : item.gatewayId} />
                                    </TableLayout>
                                </div>
                            </Collapse>

                        </div>
                    ))
                ) : null
            }
        </>
    )
}

export default AccordionItem;