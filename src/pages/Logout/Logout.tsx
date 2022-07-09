import React, { Fragment } from 'react';

// Helper CSS
import { classes } from '../../styles/styleClasses';

const Logout: React.FC = () => {
  return (
    <Fragment>
      <div style={{ ...classes.generalStyleForTitle, ...classes.paddingTop }}>
        This is Logout page
      </div>
    </Fragment>
  )
}

export default Logout;