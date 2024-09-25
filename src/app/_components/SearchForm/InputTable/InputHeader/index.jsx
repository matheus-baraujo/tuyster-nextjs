import React from 'react'
import styles from './styles.module.css'
import { Col, Row } from 'react-bootstrap'

const index = () => {
  return (
    <Row className={styles.wrapper}>
        <Col md={{span:8}} className={styles.firstCol}><h3>Produtos</h3></Col>
        <Col md={{span:4}}><h3>Quantidade</h3></Col>
    </Row>
  )
}

export default index