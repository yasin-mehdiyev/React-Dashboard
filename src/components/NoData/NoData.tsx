import React from 'react';

// Helper CSS
import { noDataClasess } from '../../styles/noDataClasess';

const NoData: React.FC<{ data: any }> = ({ data }) => {
    return (
        <>
            <div className="text-center">
                <h4 style={noDataClasess.noDataTitle}>{data?.title || "No title"}</h4>
                <p style={noDataClasess.noDataText}>{data?.text || "No text"}</p>
                {
                    data?.imageUrl ? (
                        <img
                            src={require(`../../helpers/images/${data?.imageUrl}`)}
                            alt={data?.imageUrl}
                            style={noDataClasess.noDataImage}
                        />
                    ) : <span>{"No any image"}</span>
                }

            </div>
        </>
    )
}

export default NoData;