import styles from "./styles.module.css"

export default function Rodape({texto}) {
    return (
        <>
        <footer>
        <div className={styles.rodape} >

          <div className={styles.texto} >
            {texto}
          </div>
        </div>

      </footer>
        </>
    )
}