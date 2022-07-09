import React from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { isOpen } from '../../redux/features/UI/UISlice';

// Utilities
import menuItem from '../../helpers/sidebarDatas';

// Module CSS
import classes from '../../styles/modules/sidebar.module.css';

const Sidebar: React.FC<{ children: any }> = ({ children }) => {

    const isOpenToggler = useSelector(isOpen);

    return (
        <div className={classes.containerWrap}>
            <div style={{ width: isOpenToggler ? "200px" : "60px" }} className={classes.sidebar}>
                <div className={classes.top_section}>
                    <div className={classes.bars}>
                        <img src={require('../../helpers/images/Layer_2.png')} alt="Logo" />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={classes.link}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpenToggler ? "block" : "none" }} className={classes.link_text}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>{children}</main>
        </div>
    )
}

export default Sidebar;