import React from "react";
import Progress from "../common/progress/progress";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { AiTwotoneFire } from "react-icons/ai";
import { getEtherFromWei } from "../../services/util";
import Button from "../common/button";
import styles from "./axie-card.module.css";

export default function AxieCard({ axie }) {
  return (
    <div className={`${styles.glass} flex justify-center flex-col`}>
      <Button
        onClick={() =>
          window.open(
            `https://marketplace.axieinfinity.com/axie/${axie.id}/`,
            "_blank"
          )
        }
        className="absolute text-sm px-4 py-1 right-1 top-1 cursor-pointer z-10 flex items-center justify-around bg-white hover:bg-gray-200 text-black text-center rounded-lg"
      >
        <AiTwotoneFire className="text-red-600" />
        &nbsp;Buy
      </Button>
      <Image
        className="w-56 animate-bounce-"
        src={axie.image}
        alt={axie.id}
        width={224}
        objectFit="contain"
        height={200}
      />
      <Progress breedCount={axie.breedCount} title={`Breed Count ${axie.breedCount}`} />
      <div className="px-3 py-2">
        <div className="flex items-center font-bold text-xl mb-2">
          <FaEthereum className="mr-1" />
          <p className="w-28 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {getEtherFromWei(axie.auction.currentPrice)}{" "}
          </p>
          <p className="text-gray-600 text-lg w-28 overflow-hidden overflow-ellipsis whitespace-nowrap">
            ~&nbsp;${axie.auction.currentPriceUSD}
          </p>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center justify-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Image src={`/${axie.class}.svg`} width="20" height="20" />#{axie.id}
        </div>
      </div>
    </div>
  );
}
