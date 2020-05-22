import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import TableDetail from './TableDetail';
import RisottoCard from '../../../components/RisottoCard';
import { requestApiTableData } from './redux/actions';
import { connect } from 'react-redux';
import { TABLE_STATUS } from './constants';
import '../../../assert/styles/staff.scss';

class StaffHomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestApiTableData();
    }

    imagesRender = (tables) => {
        var indents = [];
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].status == TABLE_STATUS.ready) {
                indents.push(
                    <RisottoCard
                        onClick={() => this.onShowTableDetail()}
                        srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status={TABLE_STATUS.ready} />
                );
            }
            else {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status={TABLE_STATUS.busy} />
                );
            }
        }
        return indents;
    }

    onShowTableDetail = () => {
        console.log("blablalb")
    }

    render() {
        var tables = this.props.data;
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <NavbarBrand color="black">Tạo Đơn Hàng</NavbarBrand>
                    </Navbar>
                    <Row>
                        <Col xs="7">
                            <div style={{ textAlign: "center" }}>
                                {this.imagesRender(tables)}
                            </div>
                        </Col>
                        <Col xs="5">
                            <TableDetail />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestApiTableData: () => dispatch(requestApiTableData()),
    }
}

const mapStateToProps = state => ({ data: state.dataTables });

export default connect(mapStateToProps, mapDispatchToProps)(StaffHomePage);
