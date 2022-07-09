import React, { Fragment } from 'react'

// Helper CSS
import { footerClasess } from '../../styles/footerClasses'

const Footer: React.FC = () => {
  return (
    <Fragment>
      <div style={footerClasess.footer}>
        <span>Terms&Conditions | Privacy policy</span>
      </div>
    </Fragment>
  )
}

export default Footer;