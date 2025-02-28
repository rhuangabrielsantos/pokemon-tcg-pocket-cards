"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface ICardProps {
  src: string;
  onClick?: () => void;
  hasGrayScale?: boolean;
  boosters?: string[];
}

const Card = (props: ICardProps) => {
  const { src, onClick, hasGrayScale, boosters } = props;

  return (
    <div className={styles.card}>
      <Image
        className={styles.card}
        style={{
          filter: hasGrayScale ? "grayscale(100%)" : "none",
        }}
        onClick={onClick}
        src={src}
        alt="Pokemon"
        width={200}
        height={300}
      />

      <div className="absolute bottom-2 right-2 flex gap-1 md:bottom-4 md:right-4">
        {boosters?.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="booster pack"
            width={60}
            height={30}
            title="Booster Pack que contém este Pokémon"
            style={{ filter: "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
