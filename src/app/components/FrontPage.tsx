"use client";

import Flower from "../../app/flower-2.jpg";
import Image from "next/image";
import Birds from "../../app/Love-Birds-II.svg";
import { WeddingData } from "@/utils/parseYaml";
import { Parisienne } from "next/font/google";
import { useEffect, useState } from "react";
import QrCode from "../../../public/mango-jackson.png";
import CopySiteLink from "./CopySiteLink";

const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });

const FrontPage = ({ items }: { items: WeddingData }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const screenHeight = window.innerHeight;
      setStickyHeader(window.scrollY > screenHeight * 0.75);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = () => {
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }

    setShowModal(true);
  };

  const closeModal = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "scroll";
    }

    setShowModal(false);
  };

  return (
    <div className="w-full h-screen">
      <div className="relative h-screen w-full flex flex-col justify-center cover-title-1">
        <div className="relative logo-wrapper text-6xl mb-6 w-full">
          <div className="flower-logo w-full flex justify-center">
            <Image src={Flower} alt="flower" />
          </div>
          {/* flex flex-col sm:flex-row sm:gap-4 */}
          <div
            className={`text-logo justify-center items-center w-full ${stickyHeader && "affix-title"}`}
          >
            <div className={`logo-name1 ${parisienne.className}`}>
              {items.names[0]}
            </div>
            <div className="logo-bird flex">
              <Image src={Birds} alt="birds" width={30} height={30} />
            </div>
            <div className={`logo-name2 ${parisienne.className}`}>
              {items.names[1]}
            </div>
          </div>
        </div>
        <div>
          <div className="address-time">
            <div>{items.location}</div>
            <div>{items.date}</div>
          </div>
        </div>

        {/* todo: aria-modal && aria-hidden */}
        <div className="absolute top-4 right-4">
          <button
            onClick={openModal}
            aria-label="Share this site: QR Code and site link"
            className="border-2 border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${showModal ? "fixed" : "hidden"} top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-screen flex justify-center items-center z-50 shadow-lg`}
          onClick={closeModal}
          aria-hidden={!showModal}
          aria-modal
        >
          <div className="bg-white px-8 pt-8 pb-4 rounded-lg border-2 border-gray-300 relative">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-2 top-2 cursor-pointer hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              {/* todo: chinese version */}
              <h2 className="font-bold text-2xl mb-6">Share this site:</h2>
              <div className="flex w-full justify-center flex-col items-center">
                <Image
                  className="mb-6"
                  src={QrCode}
                  alt="QR code for https://mango-jackson.web.app"
                />
                <CopySiteLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
