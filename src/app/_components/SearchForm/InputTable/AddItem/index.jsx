"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Col, Row, Button } from "react-bootstrap";


export default function index(props) {
  return (
    <Row className={styles.wrapper}>
      <Col xs={{ span: 6, offset: 3 }}>
        <Button className={styles.Add} onClick={props.handler}>Add Item</Button>
      </Col>
    </Row>
  );
}
