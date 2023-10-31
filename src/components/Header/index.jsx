import Link from "next/link"
import styles from "./styles.module.css"


export default function Header({ titulo}) {



  return (
    <>
      <header>
        <div className={styles.header} >

          <div className={styles.titulo} >
            {titulo}
          </div>
        </div>

      </header>

    </>

  )
}
