import React from 'react';

// Helper CSS
import { noDataClasess } from '../../../styles/noDataClasess';

const NoDataLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <div className="col-md-12" style={noDataClasess.noDataPadding}>
        {children}
      </div>
    </>
  )
}

export default NoDataLayout;