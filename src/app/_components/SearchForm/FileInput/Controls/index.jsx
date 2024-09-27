import React from 'react'
import styles from './styles.module.css'
import { Col, Row, Button} from 'react-bootstrap'

const index = (props) => {

  return (
    <Row className={styles.wrapper} >
        <Col xs={{ span: 8 , offset: 2 }}>                                  
            <Button className={styles.Submit} onClick={props.handler}>Enviar Lista</Button>
        </Col>
    </Row>
  )
}

export default index