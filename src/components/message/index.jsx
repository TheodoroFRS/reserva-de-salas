import { useEffect, useState } from "react"

import styles from "./styles.module.css"
import classNames from "classnames";


export default function Message({ Texto, ativo, type }) { //ativo,

  const classes = classNames({
    [styles.caixa]: true,
    [styles.success]: type === "success" ? true : false,
    [styles.info]: type === "info" ? true : false,
    [styles.error]: type === "error" ? true : false,
    [styles.warning]: type === "warning" ? true : false,
  });


  // const allStyle = {
  //   ...(success && { backgroundColor: 'var(--cor-success)' }),
  //   ...(error && { backgroundColor: 'var(--cor-error)' })

  // };
  return (
    <>
      {ativo === true ? (

        <>
          <div className={styles.container}>
            <div className={classes}>
              <p>{Texto}</p>
            </div>
          </div>
        </>
      ) : (

        <>

        </>


      )}



    </>
  )
}
