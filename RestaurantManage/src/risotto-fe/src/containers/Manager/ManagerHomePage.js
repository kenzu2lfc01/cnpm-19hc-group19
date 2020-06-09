import React, { Component } from 'react';
import '../../App.css';
import { Navbar, Col } from 'reactstrap';
import '../../assert/styles/manager.scss';
import LeftMenu from '../../components/LeftMenu'
import ManageStaff from './ManageStaff';
import {
  requestApiGetAllStaff, requestApiUpdateStaff,
  requestApiAddStaff, requestApiDeleteStaff
} from './redux/actions';
import { connect } from 'react-redux';

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
    var { dataStaffs, requestApiUpdateStaff,
      requestApiGetAllStaff, requestApiAddStaff,
      requestApiDeleteStaff } = this.props;
    return [
      {
        name: "Thống Kê Doanh Thu",
        component: <div style={{ marginLeft: "16%" }}>Đây là thống kê doanh thu</div>
      },
      {
        name: "Quản lý nhân viên",
        component: <ManageStaff
          dataStaffs={dataStaffs}
          requestApiGetAllStaff={requestApiGetAllStaff}
          requestApiUpdateStaff={requestApiUpdateStaff}
          requestApiAddStaff={requestApiAddStaff}
          requestApiDeleteStaff={requestApiDeleteStaff}
        />
      },
      {
        name: "Quản lý bàn ăn",
        component: null
      },
      {
        name: "Quản lý món ăn",
        component: null
      },
      {
        name: "Quản lý phiếu nhập",
        component: null
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
    requestApiUpdateStaff: (payload) => dispatch(requestApiUpdateStaff(payload)),
    requestApiAddStaff: (payload) => dispatch(requestApiAddStaff(payload)),
    requestApiDeleteStaff: (payload) => dispatch(requestApiDeleteStaff(payload)),
  }
}

const mapStateToProps = state => (
  {
    dataStaffs: state.managerReducers,
    dataUpdateStaff: state.managerReducers,
    managerReducers: state.managerReducers,
    deleteMessage: state.managerReducers,
  });

export default connect(mapStateToProps, mapDispatchToProps)(ManagerHomePage);
