import Link from "next/link"
import styles from "./styles.module.css"


import Container from "@/components/Container";

import Table from "@/components/Table";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import Th from "@/components/Th";
import Thead from "@/components/Thead";
import Tr from "@/components/Tr";
import { useState } from "react";


export default function Tabela() {

  //  Estado para armazenar os produtos
  const [produtos, setProdutos] = useState([]);

  //  Estado para armazenar o produto
  const [produto, setProduto] = useState();


  return (
    <>
 <Container>
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
              {produtos?.map((produto) => (
                <Tr key={produto._id}>
                  <Td>{produto.nome}</Td>
                  <Td>{produto.marca}</Td>
                  <Td>{produto.descricao}</Td>
                  <Td> {produto.fornecedor_combinado.Oid_fornecedor.nome_fantasia} </Td>
                  <Td>{produto.fornecedor_combinado.valor_combinado}</Td>
                  <Td>{produto.valor}</Td>

                  <Td>
                    <div>
                      <button
                        className={styles.button}
                        onClick={() => {
                          setProduto(produto);
                          setModalAtualizar(true);
                        }}
                      >
                        <Image
                          src={"/assets/edit.svg"}
                          width={20}
                          height={20}
                          title="Editar produto"
                          alt="Editar"
                        />
                      </button>
                      <button
                        className={styles.button}
                        onClick={() => {
                          setProduto(produto);
                          setModalVisualizar(true);
                        }}
                      >
                        <Image
                          src={"/assets/eye.svg"}
                          width={20}
                          height={20}
                          title="Visualizar produto"
                          alt="Visualizar"
                        />
                      </button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            {/* <Tfoot></Tfoot> */}
          </Table>
        </Container>

    </>

  )
}
