import React from 'react'
import { Row } from 'react-bootstrap'
import styles from './styles.module.css'
import AddItem from './AddItem'
import SubmitList from './SubmitList'

const index = (props) => {
  return (
    <Row className={styles.wrapper}>
        <AddItem handler={props.addItem}/>
        <SubmitList handler={props.Submit} />
    </Row>
  )
}

export default index