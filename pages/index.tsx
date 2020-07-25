import Head from "next/head";
import { Header } from "../components/container/Header";
import { Quotes } from "../components/container/Quotes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ludovicus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Quotes />
    </>
  );
}
