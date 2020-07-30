import React from 'react';
import { Row, Col, Menu } from 'antd';

const Header = () => (
  <div id="header-div">
    <Row className="header" justify="space-around">
      <Col>
        <span>icon</span>
      </Col>
      <Col>
        <span>导航菜单</span>
      </Col>
    </Row>
  </div>
);

export default Header;
