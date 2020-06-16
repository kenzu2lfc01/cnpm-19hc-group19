import React, { Component } from 'react'
import StaffList from './assigned/staff-list';
import { DatePicker, Row, Col } from 'antd';
import RisottoScrollTable from '../../components/RisottoScrollTable';
import { requestApiGetPayRollById } from './redux/actions';
import { connect } from 'react-redux';
import { Label, FormGroup, Button } from 'reactstrap';
import { MinusOutlined } from '@ant-design/icons';

class StaffSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }

    render() {
        var { selectedStaff } = this.state;
        var { dataPayRoll } = this.props
        return (
            <>
                <StaffList onSelected={this.onSelectedStaff} />
                {selectedStaff ?
                    <Row>
                        <Col span={16}>
                            <h2 style={{ textAlign: "left" }}>Lịch Sử Trả Lương Của: {selectedStaff.name}</h2>
                            <RisottoScrollTable
                                customClass="staff-salary"
                                content={this.renderContentTable(dataPayRoll)} />
                        </Col>
                        <Col span={8}>
                            <Row style={{ margin: "40px 0px 0px 65px" }}>
                                <h2 style={{ fontWeight: "bold", color: "#5DADE2", textAlign: "left" }}>Phiếu Tính Lương</h2>
                                <FormGroup>
                                    <Label>Họ và tên: {selectedStaff.name}</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại: {selectedStaff.phone}</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Chức vụ: {selectedStaff.position}</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mức lương: {selectedStaff.salary}</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Phụ cấp: {selectedStaff.allowance}</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Tổng cộng: {selectedStaff.salary + selectedStaff.allowance}</Label>
                                </FormGroup>
                                <DatePicker
                                    size="large"
                                    renderExtraFooter={() => 'extra footer'}
                                    picker="month" />
                                <MinusOutlined style={{ marginTop: "5%", padding: "0px 3px 0px 4px" }} />
                                <DatePicker size="large" renderExtraFooter={() => 'extra footer'} picker="year" />
                                <Button style={{ marginLeft: "2%" }} color="primary">Xác Nhận</Button>
                            </Row>
                        </Col>
                    </Row> :
                    <></>
                }
            </>
        )
    }

    onSelectedStaff = (staff) => {
        debugger;
        this.props.requestApiGetPayRollById(staff.id)
        this.setState({ selectedStaff: staff })
    }

    renderContentTable = (dataPayRoll) => {
        var elements = [];
        if (dataPayRoll && dataPayRoll.length > 0) {
            dataPayRoll.forEach(element => {
                elements.push(
                    <tr>
                        <td>{element.month}</td>
                        <td>{element.year}</td>
                        <td>{element.salary}</td>
                        <td>{element.allowance}</td>
                        <td>{element.total}</td>
                    </tr>
                )
            });
        }
        return (
            <>
                <thead>
                    <tr>
                        <th>Tháng</th>
                        <th>Năm</th>
                        <th>Mức Lương</th>
                        <th>Phụ Cấp</th>
                        <th>Tổng Lương</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestApiGetPayRollById: (payload) => dispatch(requestApiGetPayRollById(payload)),
    }
}

const mapStateToProps = state => (
    {
        dataPayRoll: state.managerPayRollIdReducers,
    });

export default connect(mapStateToProps, mapDispatchToProps)(StaffSalary);


