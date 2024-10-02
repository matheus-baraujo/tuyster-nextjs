import React from 'react'
import styles from './styles.module.css'
import { Col, Row, Form } from 'react-bootstrap'

const index = (props) => {
  var item = props.item;
  var handler = props.handler;

  return (
    <Row className={styles.wrapper} >
        <Col xs={{ span: 8 }}>                                  
            <Form.Control placeholder="Produto" defaultValue={item.text} onChange={(e) => {handler({id: item.id, text: e.currentTarget.value, quant: item.quant})}} type="text"/>
        </Col>
        <Col xs={{ span: 4 }}>
            <Form.Control placeholder="Quantidade" defaultValue={item.quant} onChange={(e) => {handler({id: item.id, text: item.text, quant: e.currentTarget.value})}} type="number"/>
        </Col>
    </Row>
  )
}

export default index