"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Form } from "react-bootstrap";
import File from './File'
import Controls from './Controls'

export default function index(props) {
    const [items, setItems] = useState([{id: Date.now(), text: '', quant:''}]);

    function addItem() {
        var newItem = {id: Date.now(), text:'', quant:''};
        setItems([...items, newItem])
    }

    function editItem(obj){

        var aux = [];

        items.map((item)=>{
            if (obj.id == item.id) {
                aux.push({id: item.id, text: obj.text, quant: obj.quant})
            }else{
                aux.push(item)
            }
        })

        // console.log(aux)
        setItems(aux)
    }

    return (
        <>
            <Form id={'FileInput'} className={styles.FileInput} action={'/Lista'} method={'POST'}>
                <File />
                <Controls selection={props.selection}/>
            </Form>
        </>
    );
}
