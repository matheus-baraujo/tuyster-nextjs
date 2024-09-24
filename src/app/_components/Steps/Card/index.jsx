import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './styles.module.css'

const index = (props) => {
  return (
    <Row className={styles.wrapper}>
        <Col xs={{span: 2}} className={'p-md-3 '+ styles.Shades}>
            <div className={styles.Icon}>
                <img src={'/home/icon('+(props.number+1)+').png'} alt={"icon "+props.number+1} />
            </div>
        </Col>
        <Col xs={{span: 10}} className='p-md-3'>
            <div className={styles.Content}>
                <p className={styles.Title}>{props.text[0]}</p>
                <p>{props.text[1]}</p>
            </div>
        </Col>
    </Row>
  )
}
export default index
