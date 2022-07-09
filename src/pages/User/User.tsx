import React, { Fragment } from 'react';

// Helper CSS
import { classes } from '../../styles/styleClasses';

const User: React.FC = () => {
  return (
    <Fragment>
      <div style={{ ...classes.generalStyleForTitle, ...classes.paddingTop }}>
        This is User page
      </div>
    </Fragment>
  )
}

export default User;