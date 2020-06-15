import React, { Component } from 'react';
import { connect } from 'react-redux';
import RisottoScrollTable from '../../components/RisottoScrollTable';
import { requestApiFoodData } from '../Employees/Staff/redux/actions';
import RisottoModal from '../../components/RisottoModal';
import { requestApiGetImportBillByDate } from './redux/actions';
import { isEqual } from 'lodash';
import { DatePicker, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { MinusOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

class ManageImportBill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateFrom: null,
            dateTo: null
        }
    }

    componentWillMount() {
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps, this.props)) {

        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={16}>
                        <h1 className="h1-margin-left">Quản Lý Danh Sách Phiếu Nhập</h1>
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

        if (date) {
            if (isDateFrom) {
                dateFrom = date.toDate().getTime();
                this.setState({ dateFrom });
            }
            else {
                dateTo = date.toDate().getTime();
                this.setState({ dateTo });
            }
            if (dateFrom, dateTo) {
                if (dateFrom > dateTo) {
                    toast.error("Ngày sau không thể nhỏ hơn ngày trước.", "Thông báo", { displayDuration: 3000 });
                    return;
                }
                this.props.requestApiGetImportBillByDate({ dateFrom: dateFrom, dateTo: dateTo })
            }
        }
    }

    renderContentTable = () => {
        var { dataImportBills } = this.props;
        var elements = [];
        if (dataImportBills && dataImportBills.length > 0) {
            dataImportBills.forEach(element => {
                elements.push(
                    <tr>
                        <td></td>
                    </tr>
                )
            });
            return (
                <>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Món Ăn</th>
                            <th>Tổng Tiền</th>
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
        requestApiGetImportBillByDate: (payload) => dispatch(requestApiGetImportBillByDate(payload)),
    }
}

const mapStateToProps = state => (
    {
        dataImportBills: state.managerReducers,
    });

export default connect(mapStateToProps, mapDispatchToProps)(ManageImportBill);
