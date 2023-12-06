import BrandColumn from "@/components/Column";
import Head from "next/head";


const brands = [
  '/images/one.png',
  '/images/two.png',
  '/images/three.png',
  '/images/four.png',
  '/images/five.png',
  '/images/six.png',
  '/images/seven.png',
  '/images/eight.png',
  '/images/nine.png',
  '/images/ten.png',

];


export default function Home() {
  return (
    <>
      <Head>
        <title>Marquee Table</title>
      </Head>
      <main>
        <div className="flex space-x-2 overflow-hidden">
        <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>
          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>
          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>
          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>          <marquee behavior="scroll" direction="up">
            {brands.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Brand ${index}`} />
            ))}
          </marquee>
          {/* <BrandColumn key="up2" images={brands} /> */}
        </div>
      </main>


    </>
  );
}
