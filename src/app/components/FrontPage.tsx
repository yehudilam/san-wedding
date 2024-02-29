"use client"

import Flower from "../../app/flower-2.jpg";
import Image from "next/image";
import Birds from "../../app/Love-Birds-II.svg";
import { WeddingData } from "@/utils/parseYaml";
import { Parisienne } from "next/font/google";
import { useEffect, useState } from "react";

const parisienne = Parisienne({ subsets: ["latin"], weight: '400' });

const FrontPage = ({ items, 
}: { items: WeddingData, 
  }) => {
    const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const screenHeight = window.innerHeight;
      setStickyHeader(window.scrollY > (screenHeight * 0.75));
    }

    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return (
    <div className="w-full h-screen">
      <div className="relative h-screen w-full flex flex-col justify-center cover-title-1">
        <div className="relative logo-wrapper text-6xl mb-6 w-full">
          <div className="flower-logo w-full flex justify-center">
            <Image src={Flower} alt="flower" />
          </div>
          <div className={`text-logo flex justify-center items-center gap-4 w-full ${stickyHeader && 'affix-title'}`}>
            <div className={`logo-name1 ${parisienne.className}`}>
              {items.names[0]}
            </div>
            <div className="logo-bird">
              <Image src={Birds} alt="birds" width={30} height={30} />
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
