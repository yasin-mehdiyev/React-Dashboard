import React, { Fragment } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isOpen, setToggler } from '../../redux/features/UI/UISlice';
import { selectUser } from '../../redux/features/User/UserSlice';

// Module CSS
import classes from '../../styles/modules/header.module.css';

const Header: React.FC = () => {

    const isOpenToggler = useSelector(isOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(setToggler(!isOpenToggler));
    };

    return (
        <Fragment>
            <nav className={classes.header}>
                <div className={classes.toggler} onClick={toggleHandler}>
                    <img src={require('../../helpers/images/Group_6.png')} alt="Toggler" />
                </div>
                <div className={classes.profile}>
                    <div className={classes.profileCapatalize}>
                        {
                            (`${user?.firstName.substr(0, 1)}${user?.lastName.substr(0, 1)}`) || "EJ"
                        }
                    </div>
                    <span className={classes.profileText}>
                        {
                            (user?.firstName + " " + user?.lastName) || "Error John"
                        }
                    </span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;