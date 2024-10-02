'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'
import { Row, Col, Button } from "react-bootstrap";

import InputTable from "./InputTable";
import FileInput from './FileInput';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faList } from "@fortawesome/free-solid-svg-icons";



const index = () => {

    const [option, setOption] = useState(0);

    function selectOption(x) {
        // 0 = unselected, 1 = manual input, 2 = file input 
        setOption(x)
    }

    function returnOption() {
        // 0 = unselected, 1 = manual input, 2 = file input 
        setOption(0)
    }

    
  return (
    <>
        {option == 0 && 
            <Row style={{height: '90%'}}>
                <Col xs={{ span: 8, offset: 2 }} className={styles.wrapper}>
                    <Button className={styles.selector} onClick={() => {selectOption(1)}}>
                        <FontAwesomeIcon icon={faList} className={styles.icon} ></FontAwesomeIcon>
                        Inserir Manualmente
                    </Button>
                    <h3 className={styles.text}>ou</h3>
                    <Button className={styles.selector} onClick={() => {selectOption(2)}}>
                        <FontAwesomeIcon icon={faFile} className={styles.icon} ></FontAwesomeIcon>
                        Anexar arquivo
                    </Button>
                </Col>
            </Row>
        }

        {option == 1 && <InputTable selection={returnOption}/> }

        {option == 2 && <FileInput selection={selectOption}/> }
    </>
  )
}

export default index