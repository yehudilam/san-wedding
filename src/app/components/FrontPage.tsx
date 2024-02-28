import Flower from "../../app/flower-2.jpg";
import Image from "next/image";
import Birds from "../../app/Love-Birds-II.svg";
import { WeddingData } from "@/utils/parseYaml";
import { Parisienne } from "next/font/google";
const parisienne = Parisienne({ subsets: ["latin"], weight: '400' });

const FrontPage = ({ items }: { items: WeddingData }) => {
  return (
    <div className="w-full h-screen">
      <div className="relative h-screen w-full flex flex-col justify-center cover-title-1">
        <div className="relative logo-wrapper text-6xl mb-4 w-full">
          <div className="flower-logo w-full flex justify-center">
            <Image src={Flower} alt="flower" />
          </div>
          <div className="text-logo flex justify-center items-center gap-4 w-full">
            <div className={`logo-name1 ${parisienne.className}`}>
              {items.names[0]}
            </div>
            <div className="logo-bird">
              <Image src={Birds} alt="birds" width={30} height={30} /> &nbsp;
            </div>
            <div className={`logo-name2 ${parisienne.className}`}>{items.names[1]}</div>
          </div>
        </div>
        <div>
          <div className="address-time">
            <div>{items.location}</div>
            <div>{items.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
