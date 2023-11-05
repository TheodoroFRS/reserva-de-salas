import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Header titulo={"Reserva de salas"} />
        <Main />
        <NextScript />
      </body>

      <Rodape texto={"Reserva de salas"} />
    </Html>
  );
}
