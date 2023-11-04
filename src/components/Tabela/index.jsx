import Link from "next/link"
import styles from "./styles.module.css"


import Container from "@/components/Container";

import Table from "@/components/Table";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import Th from "@/components/Th";
import Thead from "@/components/Thead";
import Tr from "@/components/Tr";
import { useEffect, useState } from "react";
import { api } from "@/service/api";

export default function Tabela() {

  //  Estado para armazenar os produtos
  const [reservas, setReservas] = useState([]);

  async function getReservas() {
    try {
      const res = await api.get(`/reservas`)
      setReservas(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <>
    <h2>📅Reservas realizadas:{reservas?.length}</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Solicitante</Th>
            <Th>Sala</Th>
            <Th>Início</Th>
            <Th>Fim</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservas?.map((reserva) => (
            <Tr key={reserva.id}>
              <Td>{reserva.descricao}</Td>
              <Td>{reserva.solicitante}</Td>
              <Td>{reserva.sala}</Td>
              <Td>{reserva.inicio} </Td>
              <Td>{reserva.fim}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  )
}
