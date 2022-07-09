import React, { Fragment } from 'react';

// Helper CSS
import { classes } from '../../styles/styleClasses';

const Home: React.FC = () => {
  return (
    <Fragment>
      <div style={{ ...classes.generalStyleForTitle, ...classes.paddingTop }}>
        This is Dashboard page
      </div>
    </Fragment>
  )
}

export default Home;