"use client";

import React from "react";
import styles from "./styles.module.css";
import { Col, Button } from "react-bootstrap";


export default function index(props) {
  return (
    <Col xs={{ span: props.width, offset: props.offset }}>
      <Button className={styles.button} onClick={props.handler}>{props.text}</Button>
    </Col>
  );
}
