import Image from "next/image";
import styles from "@/app/components/SearchComponent/SearchComponent.module.css";

const SearchComponent = () => {
  return (
    <div className={styles.searchComponent}>
      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Search for products"
          className={styles.searchInput}
        />
        <Image
          src="/asset/searchIcon.svg"
          alt=""
          style={{ cursor: "pointer" }}
          width={43}
          height={38}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
