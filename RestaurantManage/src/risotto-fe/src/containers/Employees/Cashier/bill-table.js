import React, { useEffect, useState } from 'react';
import { requestApiTableById, requestApiCreateReceipt } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Row, Label, Input, Col, Button,
    Table, Modal, ModalHeader, ModalBody, ModalFooter,
    Alert
} from 'reactstrap';


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
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [surcharge, setSurcharge] = useState(0);
    const tableDetail = useSelector(state => state.tableDetailResponse);
    const receiptResponse = useSelector(state => state.createReceiptResponse);
    const dispatch = useDispatch();
 
    useEffect(() => {
        if(receiptResponse.id){
            setIsOpenModel(false);
            onPayment(tableId); 
        }
    },[receiptResponse])

    useEffect(() => {
        if(tableId) dispatch( requestApiTableById(tableId) );
    },[tableId])

    const onChangeSurCharge = (e) => {
        setSurcharge(new Number(e.target.value));
    }

    const onPreviewSubmitBill = () => {
        setIsOpenModel(true);
    }

    const onSubmitBill = () => {
        let data = { tableId, surcharge };
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

                <Table style={{tableLayout: 'fixed'}}>
                    <thead>
                    <tr style={{tableLayout: 'fixed', display: 'table', width: '100%'}}>
                        <th width='50'>STT</th>
                        <th>Món ăn</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                    </tr>
                    </thead>    
                    <tbody style={{maxHeight: 350, overflowY: 'auto', display: 'block'}}>  
                        {
                            tableDetail.lastOrder.orderDetails.map((order, index) => (
                                <tr  style={{tableLayout: 'fixed', display: 'table', width: '100%'}}>
                                    <td  width='50'>{index}</td>
                                    <td>{order.food.name}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.price}</td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                    <div style={{textAlign: 'right', color: 'green', paddingRight: 20}}>Tổng cộng: {calcTotalPrice(tableDetail).toLocaleString()}</div>
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
                        <Label style={{color: "red", marginBottom: 0}}>Tổng tiền: {(surcharge + (calcTotalPrice(tableDetail))).toLocaleString()}</Label>
                    </Row>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Button onClick={onPreviewSubmitBill} style={{backgroundColor: '#2057bb', width: 170}}>Thanh toán</Button>
                    </Row>
                </Col>
            </Row>

            <Modal isOpen={isOpenModel} style={{maxWidth: '50vw'}}>
                <ModalHeader >Xác nhận thanh toán {tableDetail.name}</ModalHeader>

                <ModalBody >
                    <div> 
                        <Table style={{ tableLayout: 'fixed', minHeight: '50vh'}}>
                            <thead>
                            <tr style={{tableLayout: 'fixed', display: 'table', width: '100%'}}>
                                <th  width='100'>STT</th>
                                <th>Món ăn</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                            </tr>
                            </thead>    
                            <tbody style={{maxHeight: 350, overflowY: 'auto', display: 'block'}}>  
                                {
                                    tableDetail.lastOrder.orderDetails.map((order, index) => (
                                        <tr  style={{tableLayout: 'fixed', display: 'table', width: '100%'}}>
                                            <td  width='100'>{index}</td>
                                            <td>{order.food.name}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.price}</td> 
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>

                        <Row style={{justifyContent: 'flex-end', color: 'green', paddingRight:25}}>
                            Phụ phí: {surcharge.toLocaleString()}
                        </Row>
                        <Row style={{justifyContent: 'flex-end', color: 'red', fontWeight: 'bold', paddingRight:25}}>
                            Tổng cộng: {(surcharge + calcTotalPrice(tableDetail)).toLocaleString()}
                        </Row>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={onSubmitBill}>Xác nhận thanh toán</Button>{' '}
                    <Button color="secondary" onClick={() => setIsOpenModel(false)}>Quay lại</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default BillTable;