"use client";

import React from "react";
import styles from "./styles.module.css";
import { Col, Button } from "react-bootstrap";


export default function index(props) {
  return (
    <Col xs={{ span: 6}}>
        <Button className={styles.Submit} onClick={props.handler}>Enviar Lista</Button>
    </Col>
  );
}
