'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'
import { Form } from 'react-bootstrap'
import InputHeader from './InputHeader'
import InputItem from './InputItem'
import AddItem from './AddItem'

export default function index(){

  const [items, setItems] = useState([{id:1, text: '', quant:''}]);

  function addItem() {
    var newItem = {id: Date.now(), text:'', quant:''};
    setItems([...items, newItem])
  }

  function editItem(obj){

    var aux = [];

    items.map((item)=>{
      if (obj.id == item.id) {
        aux.push({id: item.id, text: obj.texto, quant: obj.number})
      }else{
        aux.push(item)
      }
    })

    setItems(aux)
  }


  return (
    <>
        <InputHeader />

        <Form id={'inputTable'} className={styles.inputTable}>
          {items.map((item, index)=>{
            // console.log(item)
            return <InputItem key={index} item={item} handler={editItem}/>
          })}
        </Form>

        <AddItem handler={addItem}/>
    </>
  )
}
