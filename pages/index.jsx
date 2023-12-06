import Column from "@/components/Column";
import Head from "next/head";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marquee Table</title>
      </Head>
      <main className="flex items-center justify-evenly">
        {[...Array(8)].map((_, index) => (
          <Marquee key={index} direction="up" speed={40} className="">
            <Column key={index} />
          </Marquee>
        ))}
      </main>


    </>
  );
}
