import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import HeaderSection from "@/components/HeaderSection";
import GamesOnSaleSection from "@/components/GamesOnSaleSection";
import ListOfCardsV2 from "@/components/ListOfCardsV2";
import GamesFreeSection from "@/components/GamesFreeSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Epic Games Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/epic-favicon.png" />
      </Head>

      <Layout>
        <HeaderSection />
        <GamesOnSaleSection />
        <ListOfCardsV2 />
        <GamesFreeSection />
      </Layout>
    </>
  );
}
