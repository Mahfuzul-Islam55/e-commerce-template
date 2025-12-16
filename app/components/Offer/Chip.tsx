"use client";
import { useEffect, useState } from "react";
import styles from "@/app/components/Offer/Offer.module.css";
import Image from "next/image";

const chips = [
  "React",
  "Next.js",
  "Node",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
];

export default function ChipRow() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [start, setStart] = useState(0);

  const end = start + visibleCount;
  const canGoLeft = start > 0;
  const canGoRight = end < chips.length;

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setVisibleCount(2);
      } else if (width > 480 && width <= 767) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chips}>
        {chips.slice(start, end).map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </div>

      <div className={styles.arrows}>
        <button
          className={styles.arrow}
          disabled={!canGoLeft}
          onClick={() => setStart(start - 1)}
        >
          <Image
            src={"/asset/fillArrowLeftIcon.svg"}
            alt=""
            width={9}
            height={14}
          />
        </button>

        <button
          className={styles.arrow}
          disabled={!canGoRight}
          onClick={() => setStart(start + 1)}
        >
          <Image
            src={"/asset/fillArrowLeftIcon.svg"}
            alt=""
            width={9}
            height={14}
            style={{ rotate: "180deg" }}
          />
        </button>
      </div>
    </div>
  );
}
