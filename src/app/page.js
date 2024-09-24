import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import styles from "./page.module.css";
// import result from "./api/teste";

import Logo from './_components/Logo'
import Presentation from './_components/Presentation'
import Steps from './_components/Steps'
import SearchForm from './_components/SearchForm'

import { getLocalData } from './api/getLocalData';


export default async function Home() {
  
  const data = await getLocalData();

  return (
    <div className={styles.page}>
      <Container fluid='md'>
        <Logo />
        <Presentation text={data.presentation}/>

        <Row className='my-3'>
          <Steps content={data.steps}/>
          <SearchForm />
        </Row>
        
      </Container>
    </div>
  );
}
