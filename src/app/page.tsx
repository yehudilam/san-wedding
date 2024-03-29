import Image from "next/image";
import Cover from "../app/cover.jpg";
import Program from "../app/components/Program";
import Footer from "../app/components/Footer";
import Pic from "../app/components/Pic";
import PhotoOrder from "../app/components/PhotoOrder";
import { WeddingData, getItem } from "@/utils/parseYaml";
import FrontPage from "./components/FrontPage";

export async function generateMetadata() {
  const items: WeddingData = getItem();

  const title = `${items.names[0]} - ${items.names[1]} 結婚典禮 ${items.date}`;
  const description = `${items.names[0]} - ${items.names[1]} 結婚典禮 ${items.date} ${items.location}`;

  return {
    title,
    description,
    openGraph: {
      url: "https://mango-jackson.web.app/",
      title,
      description,
      images: ["https://mango-jackson.web.app/cover.jpg"],
      type: 'website',
      // ['image:alt']: 'Mango and Jackson\'s wedding',
    },
  };
}

export default function Home() {
  const items: WeddingData = getItem();

  return (
    <>
      <main className="w-full">
        <FrontPage items={items} />

        <div className="w-full h-screen">
          <div className="flex justify-center item-center w-full h-full overflow-hidden">
            <Image
              className="cover-image"
              src={Cover}
              alt="Mango and Jackson's wedding"
            />
          </div>
        </div>

        <div className="p-2 md:p-4">
          <section className="w-full mb-16 mt-16">
            <div className="w-full text-center text-5xl mb-1">
              <h1>
                {items.chineseNames[0]} & {items.chineseNames[1]}
              </h1>
            </div>
            <div className="w-full text-center text-4xl">
              <h2>結婚典禮</h2>
            </div>
          </section>

          <Pic picSection={items.Pic} />

          <Program program={items.Program} />

          <PhotoOrder photoOrder={items.Photo} />
        </div>
      </main>

      <Footer />
    </>
  );
}
