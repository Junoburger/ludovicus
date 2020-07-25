import Head from "next/head";
import { Title } from "../components/styled/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Statuut</Title>
      <h1>Ludovicus</h1>
    </>
  );
}
