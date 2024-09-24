import React from 'react'
import styles from "./styles.module.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { nunito } from '@/app/fonts';


const index = (props) => {
    return (
        <Row className='my-md-5 my-3'>
            <Col md={{span: 10, offset: 1}}>
                <h3 className={[styles.Presentation, nunito.className].join(' ')}>
                    {props.text}
                </h3>
            </Col>
        </Row>
    )
}

export default index