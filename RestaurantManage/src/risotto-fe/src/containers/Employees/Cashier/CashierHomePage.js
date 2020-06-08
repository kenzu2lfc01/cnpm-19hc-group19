import React, { useEffect } from 'react';
import { Navbar, Col, Row } from 'reactstrap';
import {requestApiTableData} from '../Staff/redux/actions';
import { useSelector, useDispatch} from 'react-redux';

const CashierHomePage = (props) => {
   const dispatch = useDispatch();
   const tableList = useSelector(state => state.dataTables);
   console.log(tableList);

    useEffect(() => {
        dispatch(requestApiTableData());
   },[])

    
    return (
        <div className="risotto-container">
            <div className="form-create-bill">
                <Navbar color="light" expand="md">
                    <Row>
                        <Col>
                            <h3 className="text-success" color="black">Thu Ngân: {sessionStorage.getItem("name")}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Navbar>
            </div>
        </div>
    )
}

export default CashierHomePage;