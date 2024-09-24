import React from 'react'
import styles from "./styles.module.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const index = () => {
  return (
    <Row className='my-3'>
        <Col md={{span: 4, offset:4}}>
            <img className={styles.Logo} src={'/logoLight.png'} />
        </Col>
    </Row>
  )
}

export default index