import Image from "next/image";
import styles from "./page.module.css";

import result from "./api/teste";

export default async function Home() {

  console.log(result);

  return (
    <div>
        teste
    </div>
  );
}
