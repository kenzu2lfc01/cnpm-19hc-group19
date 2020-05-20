import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import TableDetail from './TableDetail';
import RisottoCard from '../../../components/RisottoCard';
import { requestApiTableData } from './redux/actions';
import { connect } from 'react-redux';

import '../../../assert/styles/staff.scss';

class StaffHomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestApiTableData();
    }

    imagesRender = () => {
        var indents = [];
        for (var i = 0; i < 20; i++) {
            if (i % 2 == 0) {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="busy" />
                );
            }
            else {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="free" />
                );
            }
        }
        return indents;
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <NavbarBrand color="black">Tạo Đơn Hàng</NavbarBrand>
                    </Navbar>
                    <Row>
                        <Col xs="7">
                            <div style={{ textAlign: "center" }}>
                                {this.imagesRender()}
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
