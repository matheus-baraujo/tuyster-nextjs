import React from 'react'
import styles from './styles.module.css'
import { Col, Row, Form } from 'react-bootstrap'

const index = (props) => {
  let item = props.item;
  const { handler } = props.handler;

  return (
    <Row className={styles.wrapper} >
        <Col xs={{ span: 8 }}>                                   {/* e => this.setState({ val: e.target.value }) */}
            <Form.Control placeholder="Produto" value={item.text} onChange={e => {handler({id: item.id, text: e.target.value, quant: item.quant})}} type="text"/>
        </Col>
        <Col xs={{ span: 4 }}>
            <Form.Control placeholder="Quantidade" value={item.quant} onChange={e => {handler({id: item.id, text: item.text, quant: e.target.value})}} type="number"/>
        </Col>
    </Row>
  )
}

export default index