import React, { useEffect, useState } from 'react';
import { requestApiTableById, requestApiCreateReceipt } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Row, Label, Input, Col, Button } from 'reactstrap';


const calcTotalPrice = (tableDetail) => {
    var totalPrice = 0;
    if (tableDetail && tableDetail.lastOrder && tableDetail.lastOrder.orderDetails.length > 0) {
        var orderDetails = tableDetail.lastOrder.orderDetails;
        orderDetails.forEach(orderDetail => {
            totalPrice += orderDetail.price * orderDetail.amount;
        });
    }
    return totalPrice;
}

const BillTable = ({ tableId, onPayment }) => {
    const [surcharge, setSurcharge] = useState(0);
    const tableDetail = useSelector(state => state.tableDetailResponse);
    const receiptResponse = useSelector(state => state.createReceiptResponse);
    const dispatch = useDispatch();
 
    useEffect(() => {
        if(receiptResponse.id){
            onPayment(tableId);
        }
    },[receiptResponse])

    useEffect(() => {
        if(tableId) dispatch( requestApiTableById(tableId) );
    },[tableId])

    const onChangeSurCharge = (e) => {
        setSurcharge(e.target.value);
    }

    const onSubmitBill = () => {
        let data = { tableId, surcharge };
        console.log(data);
        dispatch(requestApiCreateReceipt(data));
    }

    if(!tableId) {
        return(
            <></>
        )
    }

    if(!tableDetail.lastOrder){
        return(
            <Form className="form-table-detail">
                <h2>Thông Tin Chi Tiết {tableDetail.name}</h2>
                <Row>
                    <FormGroup style={{ width: "45%" }}>
                        <Label>Sức chứa:</Label>
                        <Input readOnly value={tableDetail.capacity}></Input>
                    </FormGroup>
                    <FormGroup style={{ width: "45%" }}>
                        <Label>Tình trạng:</Label>
                        <Input readOnly value={tableDetail.status}></Input>
                    </FormGroup>
                    <FormGroup style={{ width: "45%" }}>
                        <Label>No order add table</Label> 
                    </FormGroup>
                </Row>
            </Form>
        )
    }

    return(
        <div>
            <Form className="form-table-detail">
                <h2>Thông Tin Chi Tiết {tableDetail.name}</h2>
                {     
                    ''
                } 
            </Form>
            <Row style={{position: 'absolute', bottom: 0, padding: 10, width: '95%'}}>
                <Col>
                    <Row style={{color: 'green'}}>Phụ phí</Row>
                    <Row style={{color: 'green'}}>
                        <Input type='number' value={surcharge} onChange={onChangeSurCharge}></Input>    
                    </Row> 
                </Col>
                <Col >
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Label style={{color: "red", marginBottom: 0}}>Tổng tiền: {calcTotalPrice(tableDetail)}</Label>
                    </Row>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Button onClick={onSubmitBill} style={{backgroundColor: '#2057bb', width: 170}}>Thanh toán</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default BillTable;