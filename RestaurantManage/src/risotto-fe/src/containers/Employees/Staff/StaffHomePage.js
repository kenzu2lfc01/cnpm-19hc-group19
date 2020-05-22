import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import TableDetail from './TableDetail';
import RisottoCard from '../../../components/RisottoCard';
import { requestApiTableData, requestApiTableByIdData } from './redux/actions';
import { connect } from 'react-redux';
import { TABLE_STATUS } from './constants';
import '../../../assert/styles/staff.scss';

class StaffHomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestApiTableData();
    }

    onFetchTableDetailById = (tableId) => {
        this.props.requestApiTableByIdData(tableId);
    }

    render() {
        var { dataTable, dataTables } = this.props;
        var tableDetail = dataTables[0];
        if (dataTable != null && dataTable.id) {
            tableDetail = dataTable;
        }
        console.log(tableDetail);
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <NavbarBrand color="black">Tạo Đơn Hàng</NavbarBrand>
                    </Navbar>
                    <Row>
                        <Col xs="7">
                            <div style={{ textAlign: "center" }}>
                                {this.imagesRender(dataTables)}
                            </div>
                        </Col>
                        <Col xs="5">
                            {tableDetail ? <TableDetail tableDetail={tableDetail} /> : <div></div>}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    imagesRender = (tables) => {
        var indents = [];
        for (var i = 0; i < tables.length; i++) {
            let id = tables[i].id;
            if (tables[i].status == TABLE_STATUS.ready) {
                indents.push(
                    <RisottoCard
                        onClick={() => this.onFetchTableDetailById(id)}
                        srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={tables[i].name}
                        status={TABLE_STATUS.ready} />
                );
            }
            else {
                indents.push(
                    <RisottoCard
                        onClick={() => this.onFetchTableDetailById(id)}
                        srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={tables[i].name}
                        status={TABLE_STATUS.busy} />
                );
            }
        }
        return indents;
    }

}

const mapDispatchToProps = dispatch => {
    return {
        requestApiTableData: () => dispatch(requestApiTableData()),
        requestApiTableByIdData: (payload) => dispatch(requestApiTableByIdData(payload)),
    }
}

const mapStateToProps = state => (
    {
        dataTables: state.dataTables,
        dataTable: state.dataTable
    });

export default connect(mapStateToProps, mapDispatchToProps)(StaffHomePage);
