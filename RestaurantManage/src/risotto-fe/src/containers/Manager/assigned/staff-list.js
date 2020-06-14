import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { requestGetAllStaff } from './redux/actions' 

const StaffItem = ({staff, onClick, selected}) => {

    return(
        <div onClick={() => onClick(staff.id)}
            style={{padding: 5, border: '1px solid #000', fontSize: 13,
                    margin: 5, cursor: 'pointer', 
                    backgroundColor: selected == staff.id? 'rgb(241, 112, 112)' : '#fff' }}>
            <div>{staff.name}</div>
            <div>{staff.phone}</div>
            <div>{staff.position}</div>
        </div>
    )
}



const StaffList = ({onSelected}) => { 
    const dispatch = useDispatch();
    const staffList = useSelector(state => state.listStaffResponse);
    const [selected, setSelected] = useState();

    useEffect(() => {
        dispatch(requestGetAllStaff());
    }, [])
    
    const onSelectStaff = (staffId) => {
        onSelected(staffId);
        setSelected(staffId);
    }
    

    return (
        <div>
            <h5>Danh sách nhân viên</h5>
            <div style={{height: 150, border: '1px solid #000', overflowY: 'auto', 
                display: 'grid', gridTemplateColumns: 'auto auto auto auto auto'}}>
                {
                    staffList.map(staff => 
                        <StaffItem staff={staff} 
                            onClick={onSelectStaff}
                            selected={selected} />)
                }
            </div>
        </div>    
    )
}

export default StaffList;