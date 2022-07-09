import React, { Fragment } from 'react';

// Helper CSS
import { classes } from '../../styles/styleClasses';

const NotFound: React.FC = () => {
  return (
    <Fragment>
      <div style={{ ...classes.generalStyleForTitle, ...classes.paddingTop }}>
        This is 404 Not Found page
      </div>
    </Fragment>
  )
}

export default NotFound;