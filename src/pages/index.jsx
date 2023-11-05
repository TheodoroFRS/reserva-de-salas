import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Formulario from '@/components/Formulario'
import Tabela from '@/components/Tabela'
import Rodape from '@/components/Rodape'

const inter = Inter({ subsets: ['latin'] })
//npx json-server --watch database.json --port 3001
export default function Home() {

  return (
    <>
      <Head>
        <title>Reserva de salas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >

        {/* <Header titulo={"Reserva de salas"} /> */}

        <div className={styles.container}>
          <div className={styles.formulario}>
            <Formulario />
          </div>

          <div className={styles.tabela}>
            <Tabela />
          </div>
        </div>
        {/* <Rodape texto={"Reserva de salas"}/> */}
      </main>
      </>
  )
}
