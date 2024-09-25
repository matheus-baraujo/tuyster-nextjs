import React from "react";
import styles from "./styles.module.css";
import { nunito } from "@/app/fonts";

import {Row, Col} from "react-bootstrap";
import InputTable from "./InputTable";



const index = () => {

  return (
    <Col md={{ span: 6 }}>
      <h3 className={[styles.title, nunito.className].join(" ")}>
        Insira sua lista de materiais de construção
      </h3>

      <InputTable />
      
      
    </Col> 
    
  );
};

export default index;
