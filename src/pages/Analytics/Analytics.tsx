import React, { Fragment } from 'react';

// Helper CSS
import { classes } from '../../styles/styleClasses'

const Analytics: React.FC = () => {
  return (
    <Fragment>
      <div style={{ ...classes.generalStyleForTitle, ...classes.paddingTop }}>
        This is Analytics page
      </div>
    </Fragment>
  )
}

export default Analytics;