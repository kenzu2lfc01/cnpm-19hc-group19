import React, { Component } from 'react';
import { Col, Row, Label, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { requestApiTableData } from '../../containers/Employees/Staff/redux/actions';
import { requestApiAddTable } from './redux/actions';
import { isEqual } from 'lodash';

class ManageTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            capacity: 0,
        }
    }

    componentWillMount() {
        this.props.requestApiTableData();
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps, this.props)) {
            this.props.requestApiTableData();
        }
    }

    render() {
        var { dataTables, requestApiAddTable } = this.props;
        var { name, capacity } = this.state;
        return (
            <>
                <h1 className="title-alight-center">Quản Lý Bàn Ăn</h1>
                <Row>
                    <Col xs="6">
                        <Row style={{ marginBottom: "2%" }}>
                            <Col xs="4">
                                <h3 className="title-alight-center">Danh Sách Bàn Ăn</h3>
                            </Col>
                            <Col xs="6">
                                <Row className="wrap-icon-delete-option">
                                    <img className="icon-option delete" src="https://enterpriseengineeringnetwork.org/images/delete-png-1.png" />
                                </Row>
                            </Col>
                        </Row>
                        {dataTables && dataTables.length > 0 ?
                            this.renderTableLists(dataTables) :
                            <></>
                        }
                    </Col>
                    <Col xs="6">
                        <h3 className="title-alight-center">Thêm Bàn Ăn</h3>
                        <Row>
                            <FormGroup style={{ width: "50%" }}>
                                <Label>Tên bàn:</Label>
                                <Input onChange={(e) => this.handleChangeText(e, true)} type="text" />
                            </FormGroup>
                            <FormGroup style={{ width: "30%" }}>
                                <Label>Sức chứa:</Label>
                                <Input onChange={(e) => this.handleChangeText(e, false)} type="number" />
                            </FormGroup>
                            <FormGroup style={{ width: "30%", marginLeft: "53%" }}>
                                <Button onClick={() => requestApiAddTable({ name, capacity })} color="primary" style={{ width: "100%" }}>Thêm Bàn</Button>
                            </FormGroup>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }

    handleChangeText = (event, type) => {
        if (type) {
            this.setState({
                name: event.target.value
            })
        }
        else {
            this.setState({
                capacity: event.target.value
            })
        }
    }

    renderTableLists = (dataTables) => {
        var elements = [];
        dataTables.forEach((element, index) => {
            elements.push(
                <tr>
                    <td>{++index}</td>
                    <td>{element.name}</td>
                    <td>{element.capacity}</td>
                    <td>
                        <Row className="row-warp-option">
                            <Input bsSize="sm" type="checkbox" />
                            <img className="icon-option edit" src="https://cdn.onlinewebfonts.com/svg/img_386644.png" />
                        </Row>
                    </td>
                </tr>
            )
        });
        return (
            <div class="tableFixHead" >
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Bàn</th>
                            <th>Sức Chứa</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestApiTableData: () => dispatch(requestApiTableData()),
        requestApiAddTable: (payload) => dispatch(requestApiAddTable(payload)),
    }
}

const mapStateToProps = state => (
    {
        dataTables: state.dataTables,
        updateAccountData: state.dataTables,
    });

export default connect(mapStateToProps, mapDispatchToProps)(ManageTable);
