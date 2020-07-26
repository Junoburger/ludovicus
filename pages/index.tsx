import Head from "next/head";
import { Header } from "../components/container/Header";
import { Quotes } from "../components/container/Quotes";
import { TableOfContents } from "../components/container/TableOfContents";
import { Game } from "../components/container/Game";
import { PlayStyles } from "../components/container/PlayStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ludovicus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Quotes />
      <TableOfContents />
      <Game />
      <PlayStyles />
    </>
  );
}
