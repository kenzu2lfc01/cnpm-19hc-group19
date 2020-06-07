import React, { Component } from 'react';
import '../../App.css';
import { Navbar, Col } from 'reactstrap';
import '../../assert/styles/manager.scss';
import LeftMenu from '../../components/LeftMenu'
import { leftMenuItems } from './constants';
import ManageStaff from './ManageStaff';

class ManagerHomePage extends Component {
  constructor(props) {
    super(props)
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
            items={leftMenuItems}
            ManageStaff={ManageStaff}
          />

        </div>
      </div >
    );
  }
}

export default ManagerHomePage;
