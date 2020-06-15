import React, { Component } from 'react';
import { connect } from 'react-redux';
import RisottoScrollTable from '../../components/RisottoScrollTable';
import { requestApiGetOrderByDate, requestApiGetOrderById } from './redux/actions';
import { isEqual } from 'lodash';
import { DatePicker, Row, Col, Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { MinusOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import moment from 'moment';

class ManageOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateFrom: null,
            dateTo: null,
            visible: false,
            selectedDescription: null
        }
    }

    componentWillMount() {
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps, this.props)) {

        }
    }

    render() {
        var { dataOrder } = this.props;

        return (
            <>
                {dataOrder && dataOrder.id ?
                    this.renderModalBody(dataOrder) :
                    <></>
                }
                <Row>
                    <Col span={16}>
                        <h1 className="h1-margin-left">Quản Lý Danh Sách Đơn Hàng</h1>
                    </Col>
                    <Col span={6} className="wrap-date-picker">
                        <Row>
                            <DatePicker onChange={(date) => this.onChange(date, true)} className="date-picker" size="large" />
                            <MinusOutlined style={{ marginTop: "5%", padding: "0px 3px 0px 4px" }} />
                            <DatePicker onChange={(date) => this.onChange(date, false)} className="date-picker" size="large" />
                        </Row>
                    </Col>
                </Row>
                <RisottoScrollTable
                    customClass="import-bill-manage"
                    content={this.renderContentTable()} />
            </>
        )
    }

    onChange = (date, isDateFrom) => {
        var { dateFrom, dateTo } = this.state;
        var dateNow = Date.now();
        if (date) {
            if (isDateFrom) {
                dateFrom = date.toDate().getTime();
                if (dateFrom > dateNow) {
                    toast.error("Ngày bắt đầu không thể lớn hơn ngày hiện tại.", "Thông báo", { displayDuration: 3000 });
                    return;
                }
                this.setState({ dateFrom });
            }
            else {
                dateTo = date.toDate().getTime();
                if (dateTo > dateNow) {
                    toast.error("Ngày kết thúc không thể lớn hơn ngày hiện tại.", "Thông báo", { displayDuration: 3000 });
                    return;
                }
                this.setState({ dateTo });
            }
            if (dateFrom, dateTo) {
                if (dateFrom > dateTo) {
                    toast.error("Ngày sau không thể nhỏ hơn ngày trước.", "Thông báo", { displayDuration: 3000 });
                    return;
                }
                this.props.requestApiGetOrderByDate({ dateFrom: dateFrom, dateTo: dateTo })
            }
        }
    }

    renderModalBody = (dataOrder) => {
        const layout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 20 },
        };
        if (dataOrder && dataOrder.orderDetails && dataOrder.orderDetails.length > 0) {
            var elements = [];
            dataOrder.orderDetails.forEach(element => {
                elements.push(
                    <article>
                        <Form className="form" {...layout}>
                            <Form.Item label="Tên Món Ăn">
                                <Input readOnly value={element.food.name} />
                            </Form.Item>
                            <Form.Item label="Giá Tiền">
                                <Input readOnly value={element.price} />
                            </Form.Item>
                            <Form.Item label="Số Lượng">
                                <Input readOnly value={element.amount} />
                            </Form.Item>
                            <Form.Item label="Ghi Chú">
                                <Input.TextArea readOnly value={element.note} />
                            </Form.Item>
                        </Form>
                    </article>
                )
            })
            return (
                <Modal
                    title="Thông Tin Đơn Hàng Chi Tiết"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="Ok"
                    cancelText="Cancel"
                >
                    <div className="wrap-grid manage-order">
                        <div class="modal-order-details">
                            {elements}
                        </div>
                    </div>
                </Modal >
            )
        }
    }
    showModal = (id) => {
        this.props.requestApiGetOrderById(id);
        this.setState({
            visible: true,

        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };


    renderContentTable = () => {
        var { dataOrders } = this.props;
        var elements = [];
        if (dataOrders && dataOrders.content && dataOrders.content.length > 0) {
            dataOrders.content.forEach((element, index) => {
                let stt = ++index;
                let id = element.id;
                let createdTime = moment(element.createdAt).format("DD-MM-YYYY h:mm:ss")
                elements.push(
                    <tr>
                        <td>{stt}</td>
                        <td>{element.staff.name}</td>
                        <td>{element.table.name}</td>
                        <td>{createdTime}</td>
                        <td>
                            <img
                                onClick={() => this.showModal(id)}
                                className="icon-option details"
                                src="https://img.pngio.com/icon-detail-icon-png-and-vector-for-free-download-pngtree-detail-png-512_512.png" />
                        </td>
                    </tr>
                )
            });
            return (
                <>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Nhân Viên</th>
                            <th>Tên Bàn</th>
                            <th>Ngày Tạo</th>
                            <th>Chi Tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </>
            )
        }
        else {
            return <></>;
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestApiGetOrderByDate: (payload) => dispatch(requestApiGetOrderByDate(payload)),
        requestApiGetOrderById: (payload) => dispatch(requestApiGetOrderById(payload)),
    }
}

const mapStateToProps = state => (
    {
        dataOrders: state.managerOrderByDateReducers,
        dataOrder: state.managerOrderByIdReducers,
    });

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);
