import React from "react";
import Image from "next/image";
import { BsShopWindow } from "react-icons/bs";
import {FiLogIn} from "react-icons/fi";

export default function Header() {
  return (
    <header className="py-3 bg-gray-900 text-white flex justify-center">
      <div className="fixed top-0 left-0">
        <Image src="/logo.png" objectFit="cover" width={80} height={40} />
      </div>

      <h4 className="flex items-center cursor-pointer">
        <BsShopWindow className="mr-1" /> Axie Infinity - Marketplace 2.0
      </h4>
      <div className="fixed right-0 top-0 py-3 px-6 bg-blue-600 cursor-pointer flex items-center">
        <FiLogIn className="mr-1" onClick={() =>
          window.open(
            `https://marketplace.axieinfinity.com`,
            "_blank"
          )
        } />
        Login
      </div>
    </header>
  );
}
