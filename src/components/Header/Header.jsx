import React, { memo } from "react";
import { Col, Row } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Header = memo(() => {
  return (
    <div className="Header">
      <h1>JESUS ALFREDO CABRITA TORREALBA</h1>
      <h3>Ingeniero de Sistemas</h3>

      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <p>
            {" "}
            <MailOutlined /> capram94@gmail.com{" "}
          </p>
        </Col>
        <Col className="gutter-row" span={8}>
          <LinkedinOutlined />{" "}
          <a
            href="https://www.linkedin.com/in/jesus-alfredo-cabrita-torrealba-839a65159/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Linkedin
          </a>
        </Col>
        <Col className="gutter-row" span={8}>
          <GithubOutlined />
          <a href="https://github.com/raycoga" target="_blank" rel="noreferrer">
            {" "}
            Linkedin
          </a>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <WhatsAppOutlined /> +58 412 429 42 35
        </Col>
        <Col className="gutter-row" span={12}>
          <GlobalOutlined /> Miranda - Venezuela
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <PhoneOutlined /> +58 424 142 76 85
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <PhoneOutlined /> +58 426 513 12 86
        </Col>
      </Row>
    </div>
  );
});
Header.displayName = "Header";
export default Header;
