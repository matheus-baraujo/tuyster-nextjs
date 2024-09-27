import React from "react";
import styles from "./styles.module.css";
import { nunito } from "@/app/fonts";

import {Col} from "react-bootstrap";
import InputTable from "./InputTable";
import FileInput from './FileInput';



const index = () => {

  return (
    <Col md={{ span: 6 }}>
      <h3 className={[styles.title, nunito.className].join(" ")}>
        Insira sua lista de materiais de construção
      </h3>

      <InputTable />
      
      <FileInput />
      
    </Col> 
    
  );
};

export default index;
