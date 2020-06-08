import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assert/styles/manager.scss';
import moment from 'moment';

export default class ManageStaff extends Component {
    constructor(props) {
        super(props);
        var { dataStaffs } = this.props;
        if (dataStaffs && dataStaffs.length > 0) {
            this.state = {
                selectedStaff: dataStaffs[0],
                isDisable: true,
            }
        }
    }

    render() {
        var { dataStaffs } = this.props;
        return (
            <div className="main-manage-staff">
                <Row>
                    <Col xs="6">
                        <Row>
                            <Col xs="6">
                                <h3>Danh sách nhân viên</h3>
                            </Col>
                            <Col style={{ textAlign: "right" }} xs="6">
                                <Button color="primary">Thêm Nhân Viên</Button>
                            </Col>
                        </Row>
                        <div className="wrap-grid manage-staff">
                            <Row>
                                {dataStaffs && dataStaffs.length > 0 ?
                                    this.renderStaffsInformation(dataStaffs) :
                                    <></>
                                }
                            </Row>
                        </div>
                    </Col>
                    <Col xs="6">
                        {this.renderStaffDetailInformation()}
                    </Col>
                </Row>
            </div>
        )
    }

    renderStaffsInformation = (dataStaffs) => {
        var elements = [];
        var { selectedStaff } = this.state;
        for (var item of dataStaffs) {
            let dataStaff = item;
            if (selectedStaff.id == dataStaff.id) {
                elements.push(
                    <div className="card staff-infor active">
                        {this.renderCardBody(item)}
                    </div>
                )
                continue;
            }
            elements.push(
                <div onClick={() => this.onSelectStaff(dataStaff)} className="card staff-infor">
                    {this.renderCardBody(item)}
                </div>
            )
        }
        return elements;
    }

    renderStaffDetailInformation = () => {
        var { isDisable, selectedStaff } = this.state;
        return (
            <>
                <h2>Thông tin chi tiết nhân viên: {selectedStaff.name}</h2>
                <Row>
                    <FormGroup className="form-group-staff">
                        <Label>Họ và tên: </Label>
                        <Input disabled={isDisable} value={selectedStaff.name} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Số điện thoại: </Label>
                        <Input disabled={isDisable} value={selectedStaff.phone} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Chức vụ: </Label>
                        <Input disabled={isDisable} value={selectedStaff.position} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Ngày vào làm: </Label>
                        <Input disabled={isDisable} value={moment(selectedStaff.joinDate).format("DD-MM-YYYY HH:mm:ss")} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Mức lương: </Label>
                        <Input disabled={isDisable} value={selectedStaff.salary} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Phụ Cấp: </Label>
                        <Input disabled={isDisable} value={selectedStaff.allowance} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Tài khoản đăng nhập: </Label>
                        <Input disabled={isDisable} value={selectedStaff.account.username} />
                    </FormGroup>
                    {!isDisable ?
                        <FormGroup className="form-group-staff">
                            <Label>Mật khẩu: </Label>
                            <Input type="password" />
                        </FormGroup> :
                        <></>
                    }
                </Row>
                <Row>
                    <FormGroup className="form-group-staff">
                        <Button onClick={() => this.onSwitchEditStaff()} className="button-edit-delete" color="success">Chỉnh Sửa Nhân Viên</Button>
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Button className="button-edit-delete" color="danger">Xóa Nhân Viên</Button>
                    </FormGroup>
                </Row>
            </>
        )
    }

    onSwitchEditStaff = () => {
        var { isDisable } = this.state;

        this.setState({
            isDisable: !isDisable
        })
    }

    renderCardBody = (item) => {
        return (
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.position}</h6>
                <div className="card-text">Lương: {item.salary}</div>
                <div className="card-text">SĐT: {item.phone}</div>
            </div>
        )
    }

    onSelectStaff = (dataStaff) => {
        this.setState(
            {
                selectedStaff: dataStaff
            }
        )
    }
}
