import React from 'react';

const TableLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <table className="table-wrap">
        {children}
      </table>
    </>
  )
}

export default TableLayout;