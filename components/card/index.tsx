"use client";

import React from "react";
import styles from "./styles.module.css";

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
      <img
        className={styles.card}
        style={{
          filter: hasGrayScale ? "grayscale(100%)" : "none",
        }}
        onClick={onClick}
        src={src}
        alt="Pokemon"
      />

      <div className="absolute bottom-2 right-2 flex gap-1 md:bottom-4 md:right-4">
        {boosters?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="booster pack"
            title="Booster Pack que contém este Pokémon"
            style={{ filter: "none", width: 50, height: 90 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
