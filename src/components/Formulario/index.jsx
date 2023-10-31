import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import { useState } from "react"
import Container from '@/components/Container'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'

import Radio from '@/components/Form/Radio'
import Option from '@/components/Form/Option'
import Selection from '@/components/Form/Selection'
import Botao from '@/components/Form/Botao'
import Textarea from '@/components/Form/Textarea'
import Checkbox from '@/components/Form/Checbox'
import { api } from "@/service/api";
import Message from "@/components/message";

import styles from "./styles.module.css"


export default function Formulario() {

  //  Estado para mostar a message de success ou error para cadastro
  const [cadastro, setCadastro] = useState(false);
  
  const [termos, setTermos] = useState(true);

  const [dados, setDados] = useState({
    descricao: "",
    solicitante: "",
    sala: "",
    inicio: "",
    fim: "",
    termos: termos,
  });

  async function inserirDados(e) {
    try {
     // e.preventDefault()
      const res = await api.post('/reservas', dados)
      setCadastro(true)
      console.log(re.data);
      // setTermos(res.data.)
      setDados({
        descricao: "",
        solicitante: "",
        sala: "",
        inicio: "",
        fim: "",
        termos: termos,
      })
    } catch (error) {
      console.log(error);
      console.log(`Deu ruim`);
      alert("Deu ruim")
      setCadastro(false)
    }
  }


  return (
    <>
      {cadastro == true ? (
        <>
          <Message
            Texto="Cadastro realizado com sucesso"
            ativo={true}
            success
          />

        </>

      ) : (

        <>

          <Message
            Texto="Cadastro não realizado"
            //ativo={true}
            error
          />

        </>

      )}

      {termos == true ? (
        <>
          {/* <Message
            Texto="Cadastro realizado com sucesso"
            ativo={true}
            success
          /> */}

        </>

      ) : (

        <>

          <Message
            Texto="Concordo com os termos?"
            ativo={true}
            error
          />

        </>

      )}
   
      <p>Descrição:{dados.descricao}</p>
      <p>Solicitante:{dados.solicitante}</p>
      <p>Sala:{dados.sala}</p>
      <p>inicio:{dados.inicio}</p>
      <p>fim:{dados.fim}</p>
      <p>Termos:{dados.termos}</p>

      {dados.inicio > dados.fim ? (
        <>
          <Message
            Texto="data final menor que a data inicial."
            ativo={true}
            error
          />

        </>

      ) : (

        <>

          {/* <Message
               Texto="Cadastro realizado com sucesso"
               ativo={true}
               success
          /> */}

        </>

      )}

      <form className={styles.formulario} onSubmit={e => inserirDados(e)}>
        <div className={styles.container} >

          <div className={styles.sub_container} >
            <Label htmlFor="descricao">Descrição:</Label>
            <textarea id="descricao" rows="4" cols="50" placeholder="Digite a descricao aqui" required
              value={dados.descricao} onChange={e => setDados({ ...dados, descricao: e.target.value })}></textarea>
          </div>

          <div className={styles.sub_container} >
            <Label htmlFor={"solicitante"} >Solicitante:</Label>
            <input type='text' id="solicitante" value={dados.solicitante} onChange={e => setDados({ ...dados, solicitante: e.target.value })}></input>
          </div>

          <div className={styles.sub_container} >
            <Label htmlFor={"sala"} >Sala:</Label>
            <input type='text' id="sala" value={dados.sala} onChange={e => setDados({ ...dados, sala: e.target.value })} required></input>
          </div>


          <div className={styles.sub_container} >
            <Label htmlFor={"inicio"} >Inicio:</Label>
            <input type='datetime-local' id="inicio" value={dados.inicio} onChange={e => setDados({ ...dados, inicio: e.target.value })}></input>
          </div>

          <div className={styles.sub_container} >
            <Label htmlFor={"fim"}>Fim:</Label>
            <input type='datetime-local' id="fim" value={dados.fim} onChange={e => setDados({ ...dados, fim: e.target.value })} required></input>
          </div>


          <div className={styles.sub_container} >
            <input type='checkbox' id="termos" value={dados.termos} onClick={() => setTermos(true)} onChange={e => setDados({ ...dados, termos: e.target.value })} required></input>
            <Label htmlFor={"termos"} >concordo com os termos?</Label>
          </div>

          <Container >
            <Botao type="submit">Reservar sala</Botao>
          </Container>

        </div>
      </form >

    </>
  )
}
