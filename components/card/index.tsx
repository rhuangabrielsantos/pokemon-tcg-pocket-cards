"use client";

import React, { useRef, useEffect } from "react";
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

  const cardRef = useRef<HTMLDivElement>(null);

  const rotateToMouse = (e: MouseEvent) => {
    if (!cardRef.current) return;

    const boundsRef = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - boundsRef.x;
    const topY = mouseY - boundsRef.y;

    const center = {
      x: leftX - boundsRef.width / 2,
      y: topY - boundsRef.height / 2,
    };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.2, 1.2, 1.2)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = cardRef.current.querySelector(".glow") as HTMLDivElement;

    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + boundsRef.width / 2}px
          ${center.y * 2 + boundsRef.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", rotateToMouse);
      card.style.transform = "";

      const glow = card.querySelector(`.${styles.glow}`) as HTMLDivElement;
      if (glow) {
        glow.style.background = "";
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", rotateToMouse);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
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
