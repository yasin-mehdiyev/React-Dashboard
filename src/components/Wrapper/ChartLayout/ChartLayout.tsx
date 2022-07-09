import React from 'react';

const ChartLayout: React.FC<{ col: any, children: any }> = ({ col, children }) => {
    return (
        <>
            <div className={`col-md-${col}`}>
                {children}
            </div>
        </>
    )
}

export default ChartLayout;