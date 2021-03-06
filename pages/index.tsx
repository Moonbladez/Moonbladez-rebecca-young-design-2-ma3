import Head from "next/head";

import { Nav } from "./../Components/Nav";
import { Banner } from "./../Components/Banner";
import { About } from "./../Components/About";
import { Portfolio } from "./../Components/Portfolio";
import { Blog } from "./../Components/Blog";
import { CTA } from "./../Components/CTA";
import { Footer } from "./../Components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trendy House | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Banner />
      <main>
        <About />
        <Portfolio />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
