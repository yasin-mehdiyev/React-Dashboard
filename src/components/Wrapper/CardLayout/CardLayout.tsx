import React from 'react';

// Module CSS
import cards from '../../../styles/modules/card.module.css';

// Helper CSS
import { classes } from '../../../styles/styleClasses';

const CardLayout: React.FC<{ col: any, projectName: any, gatewayName: any, children: any }> = ({ col, projectName, gatewayName, children }) => {
    return (
        <>
            <div className={`col-md-${col}`}>
                <div className={cards.cardMain}>
                    <div className={cards.cardHeader}>
                        <p style={classes.commonBoxStyle}>
                            {projectName?.name || "All projects"} {"|"} {gatewayName?.name || "All gateways"}</p>
                        <div className="wrapper-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLayout;