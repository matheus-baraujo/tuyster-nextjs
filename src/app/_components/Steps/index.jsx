import React from "react";
import styles from "./styles.module.css";

import Col from "react-bootstrap/Col";
import Card from "./Card";

import { nunito } from "@/app/fonts";

const index = (props) => {

  let steps = props.content;
  // teste.map((item)=>{console.log(item)})

  return (
    <Col md={{ span: 6 }}>
      <h3 className={[styles.title, nunito.className].join(" ")}>
        Como funciona a Tuyster?
      </h3>
      {steps.map((item, index) => {
        return <Card key={index} number={index} text={item}/>
      })}
    </Col> 
    
  );
};

export default index;
