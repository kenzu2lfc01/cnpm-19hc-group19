import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assert/styles/manager.scss';
import moment from 'moment';
import { POSITIONS } from './constants';
import { cloneDeep } from 'lodash';

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
        var cloneDataStaffs = cloneDeep(dataStaffs);

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
                                {cloneDataStaffs && cloneDataStaffs.length > 0 ?
                                    this.renderStaffsInformation(cloneDataStaffs) :
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
                <h2>Thông tin chi tiết nhân viên</h2>
                <Row>
                    <FormGroup className="form-group-staff">
                        <Label>Họ và tên: </Label>
                        <Input onChange={(e) => this.handleChange(e, 1)} type="text" disabled={isDisable} value={selectedStaff.name} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Số điện thoại: </Label>
                        <Input disabled={isDisable} placeholder={selectedStaff.phone} />
                    </FormGroup>
                    {this.renderSelectRole(selectedStaff.position, isDisable)}
                    <FormGroup className="form-group-staff">
                        <Label>Ngày vào làm: </Label>
                        <Input disabled={isDisable} placeholder={moment(selectedStaff.joinDate).format("DD-MM-YYYY HH:mm:ss")} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Mức lương: </Label>
                        <Input disabled={isDisable} placeholder={selectedStaff.salary} />
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Label>Phụ Cấp: </Label>
                        <Input disabled={isDisable} placeholder={selectedStaff.allowance} />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="form-group-staff">
                        <Button onClick={() => this.onSwitchEditStaff()} className="button-edit-delete" color="success">Chỉnh Sửa Nhân Viên</Button>
                    </FormGroup>
                    <FormGroup className="form-group-staff">
                        <Button className="button-edit-delete" color="danger">Xóa Nhân Viên</Button>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="form-group-staff">
                        <Label>Tài khoản đăng nhập: </Label>
                        <Input disabled={isDisable} placeholder={selectedStaff.account.username} />
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
                        <Button className="button-edit-delete" color="success">Chỉnh Sửa Tài Khoản</Button>
                    </FormGroup>
                </Row>
            </>
        )
    }

    handleChange(event, type) {
        var { selectedStaff } = this.state;
        switch (type) {
            case 1:
                selectedStaff.name = event.target.value;
                break;
            case 2:
                selectedStaff.phone = event.target.value;
                break;
            case 3:
                selectedStaff.position = event.target.value;
                break;
            case 4:
                selectedStaff.salary = event.target.value;
                break;
            case 5:
                selectedStaff.allowance = event.target.value;
                break;
        }
        this.setState(selectedStaff)
    }

    renderSelectRole = (position, isDisable) => {
        var options = [];
        for (let item of POSITIONS) {
            if (position == item.eng) {
                options.push(
                    <option selected value={item.eng}>{item.viet}</option>
                )
            }
            options.push(
                <option value={item.eng}>{item.viet}</option>
            )
        }
        return (
            <FormGroup className="form-group-staff">
                <Label>Chức vụ: </Label>
                <Input type="select" disabled={isDisable} >
                    {options}
                </Input>
            </FormGroup>
        );
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
