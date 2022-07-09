import React, { Fragment } from 'react';

// UI Frameworks (Ant Design)
import { Button } from 'antd';

// Module CSS
import classes from '../../styles/modules/button.module.css';

const FormButton: React.FC = () => {
  return (
    <Fragment>
        <Button type="primary" htmlType="submit" className={classes.antBtnPrimary}>Generate report</Button>
    </Fragment>
  )
}

export default FormButton;