import React from 'react'
import styles from './styles.module.css'
import { Col, Row, Form } from 'react-bootstrap'

const index = (props) => {
//   var handler = props.handler;

  return (
    <Row className={styles.wrapper} >
        <Col xs={{ span: 8 , offset: 2 }}>                                  
            <Form.Control type="file" name='Lista'/>
        </Col>
    </Row>
  )
}

export default index