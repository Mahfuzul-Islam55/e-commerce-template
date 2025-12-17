"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/components/SearchComponent/SearchComponent.module.css";

const SearchComponent = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = async () => {
    if (!query) return;
    router.push(`/products`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchComponent}>
      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Search for products"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Image
          src="/asset/searchIcon.svg"
          alt="Search"
          style={{ cursor: "pointer" }}
          width={43}
          height={38}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
