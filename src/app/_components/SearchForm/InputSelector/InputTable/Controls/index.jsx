import React from 'react'
import { Row } from 'react-bootstrap'
import styles from './styles.module.css'

import Button from './Button';

const index = (props) => {

  // console.log(props)
  
  return (
    <Row className={styles.wrapper}>
        <Button width={6} offset={3} handler={props.addItem} text={'Novo Item'}/>
        <Button width={6} offset={0} handler={props.selection} text={'Cancelar'}/>
        <Button width={6} offset={0} handler={props.Submit} text={'Enviar Lista'}/>
    </Row>
  )
}

export default index