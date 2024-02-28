import Image from "next/image";
import Cover from "../app/cover.jpg";
import Flower from "../app/flower-2.jpg";
import Birds from "../app/Love-Birds-II.svg";
import Program from "../app/components/Program";
import Footer from "../app/components/Footer";
import Pic from "../app/components/Pic";
import PhotoOrder from "../app/components/PhotoOrder";
import { WeddingData, getItem } from "@/utils/parseYaml";
import FrontPage from "./components/FrontPage";

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
              <h1>葉俊燊 & 馮琪軫</h1>
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
