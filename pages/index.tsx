import Head from "next/head";
import { Header } from "../components/container/Header";
import { Quotes } from "../components/container/Quotes";
import { TableOfContents } from "../components/container/TableOfContents";
import { Game } from "../components/container/Game";
import { PlayStyles } from "../components/container/PlayStyles";
import { GameModes } from "../components/container/GameModes";
import { RoleDivision } from "../components/container/RoleDivision";
import { GameDirections } from "../components/container/GameDirections";

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
      <GameModes />
      <RoleDivision />
      <GameDirections />
      <PlayStyles second />
      <GameModes second />
      <RoleDivision second />
    </>
  );
}
