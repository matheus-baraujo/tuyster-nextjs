import React from "react";
import styles from "./styles.module.css";

import Col from "react-bootstrap/Col";

import { nunito } from "@/app/fonts";

const index = () => {

  return (
    <Col md={{ span: 6 }}>
      <h3 className={[styles.title, nunito.className].join(" ")}>
        Insira sua lista de materiais de construção
      </h3>
      
      
    </Col> 
    
  );
};

export default index;
