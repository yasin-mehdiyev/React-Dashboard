import * as React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setHasAccessRequest } from '../../redux/features/UI/UISlice';

// Helpers CSS
import { classes } from '../../styles/styleClasses';

// UI Frameworks (Material UI)
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select: React.FC<{ data: any, value: any, setValue: any, name: string, initialTitle: string }> = ({ data, value, setValue, name, initialTitle }) => {

    const dispatch = useDispatch();

    const handleChange = (item: any): any => {
        setValue({
            ...value,
            [name]: item
        });
        dispatch(setHasAccessRequest(true));
    };

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button style={classes.commonSelectButton} {...bindTrigger(popupState)} endIcon={<KeyboardArrowDownIcon />}>
                        {value[name] !== "" ? value[name]?.name : initialTitle}
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        {
                            data && data.length ? (
                                data.map((item: any, index: number): any => (
                                    <MenuItem key={index} onClick={() => {
                                        handleChange(item);
                                        popupState.close()
                                    }}>{item?.name}</MenuItem>
                                ))
                            ) : null
                        }
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
};

export default Select;