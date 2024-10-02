'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'
import { Form } from 'react-bootstrap'
import InputHeader from './InputHeader'
import InputItem from './InputItem'
import Controls from './Controls'

export default function index(props){

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

  function submitList(){
    
  }

  return (
    <>
        <InputHeader />

        <Form id={'inputTable'} className={styles.inputTable} action={'/Lista'} method={'POST'}>
          {items.map((item, index)=>{
            // console.log(item)
            return <InputItem key={index} item={item} handler={editItem}/>
          })}
        </Form>

        <Controls addItem={addItem} Submit={''} selection={props.selection}/>
        
    </>
  )
}
