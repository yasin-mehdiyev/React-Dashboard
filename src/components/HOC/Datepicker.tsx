import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setHasAccessRequest } from '../../redux/features/UI/UISlice';

// UI Frameworks (Ant Design)
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const Datepicker: React.FC<{ placeholder: string, name: string, datepicker: any, setDatepicker: any }> = ({ placeholder, name, datepicker, setDatepicker }) => {

    const dispatch = useDispatch();
    
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDatepicker({
            ...datepicker,
            [name]: dateString
        });
        dispatch(setHasAccessRequest(true));
    };

    return (
        <Space direction="vertical">
            <DatePicker onChange={onChange} placeholder={placeholder} format="DD-MM-yyyy" />
        </Space>
    )
}

export default Datepicker;