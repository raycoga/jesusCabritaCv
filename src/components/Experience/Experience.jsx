import React, { memo } from "react";
import { Card, Col, Row } from "antd";
import "./Experience.scss";
const Experience = memo(() => {
  return (
    <div className="Experience">
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={24}>
          <Card
            type="inner"
            title={<div>Desarrollador de Software</div>}
            extra={"Sep 2022 - Al presente"}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col className="gutter-row" span={24}>
          <Card
            type="inner"
            title={<div>Desarrollador de Software</div>}
            extra={"Sep 2022 - Al presente"}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={24}>
          <Card
            type="inner"
            title={<div>Desarrollador de Software</div>}
            extra={"Sep 2022 - Al presente"}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default Experience;
