import Head from "next/head";
import { Title } from "../components/styled/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ludovicus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Statuut</Title>
      <h1>Ludovicus</h1>
    </>
  );
}
