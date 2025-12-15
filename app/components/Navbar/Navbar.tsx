import Image from "next/image";
import SearchComponent from "@/app/components/SearchComponent/SearchComponent";
import styles from "@/app/components/Navbar/Navbar.module.css";
import SelectOptions from "@/app/components/selectOptions/SelectOptions";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Image
        src={"/asset/logo.svg"}
        alt=""
        className={styles.logo}
        width={132.5}
        height={48}
      />
      <div className={styles.searchContainer}>
        <SelectOptions />
        <SearchComponent />
      </div>
      <div className={styles.userAccountContainer}>
        <div className={styles.signInContainer}>
          <span className={`${styles.cellPhoneContainer} ${styles.callUsNow}`}>
            Call Us Now
          </span>
          <div className={styles.cellPhoneContainer}>
            <Image
              src={"/asset/cellPhoneIcon.svg"}
              alt=""
              width={19}
              height={19}
            />
            <span>+011 5827918</span>
          </div>
          <span
            className={`${styles.cellPhoneContainer} ${styles.callUsNow}  ${styles.signInText}`}
          >
            Sign In
          </span>
        </div>
        <div className={styles.userContainer}>
          <Image src={"/asset/userIcon.svg"} alt="" width={24} height={24} />
          <Image
            src={"/asset/favouriteIcon.svg"}
            alt=""
            width={24}
            height={24}
          />
          <Image src={"/asset/cartIcon.svg"} alt="" width={60} height={44} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
