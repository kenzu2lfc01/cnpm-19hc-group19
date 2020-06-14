import React, { Component } from 'react';
import '../../App.css';
import { Navbar, Col } from 'reactstrap';
import '../../assert/styles/manager.scss';
import LeftMenu from '../../components/LeftMenu'
import ManageStaff from './ManageStaff';
import ManageTable from './ManageTable';
import ManageFood from './ManageFood';
import ManageImportBill from './ManageImportBill';
import {
  requestApiGetAllStaff
} from './redux/actions';
import { connect } from 'react-redux';
import Aggregate from './aggregate/aggregate';

class ManagerHomePage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestApiGetAllStaff()
  }

  render() {
    return (
      <div className="risotto-container">
        <div className="form-create-bill">
          <Navbar color="light" expand="md">
            <Col>
              <h3 className="text-success" color="black">Quản Lý: {sessionStorage.getItem("name")}</h3>
            </Col>
          </Navbar>
          <LeftMenu
            items={this.getLeftItems()}
          />
        </div>
      </div >
    );
  }

  getLeftItems = () => {
    var { dataStaffs } = this.props;
    return [
      {
        name: "Thống Kê Doanh Thu",
        component: <Aggregate />
      },
      {
        name: "Quản lý nhân viên",
        component: <ManageStaff
          dataStaffs={dataStaffs}
          requestApiGetAllStaff={requestApiGetAllStaff}
        />
      },
      {
        name: "Quản lý bàn ăn",
        component: <ManageTable />
      },
      {
        name: "Quản lý món ăn",
        component: <ManageFood />
      },
      {
        name: "Quản lý phiếu nhập",
        component: <ManageImportBill />
      },
      {
        name: "Quản lý đơn hàng",
        component: null
      },
      {
        name: "Quản lý hóa đơn",
        component: null
      },
      {
        name: "Phân công ca làm",
        component: null
      },
      {
        name: "Bảng lương nhân viên",
        component: null
      },
    ];
  }

}
const mapDispatchToProps = dispatch => {
  return {
    requestApiGetAllStaff: () => dispatch(requestApiGetAllStaff()),
  }
}

const mapStateToProps = state => (
  {
    dataStaffs: state.managerReducers,
  });

export default connect(mapStateToProps, mapDispatchToProps)(ManagerHomePage);
