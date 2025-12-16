"use client";
import Image from "next/image";
import SearchComponent from "@/app/components/SearchComponent/SearchComponent";
import styles from "@/app/components/Navbar/Navbar.module.css";
import SelectOptions from "@/app/components/selectOptions/SelectOptions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleSignin = () => {
    router.push("/pages/signin");
  };

  const handleProfile = () => {
    router.push("/pages/profile");
  };
  const handleFavourite = () => {
    router.push("/pages/favourite");
  };
  return (
    <div className={styles.navbarContainer}>
      <Link href={"/"}>
        <Image
          src={"/asset/logo.svg"}
          alt=""
          className={styles.logo}
          width={132.5}
          height={48}
        />
      </Link>
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
            onClick={handleSignin}
            className={`${styles.cellPhoneContainer} ${styles.callUsNow}  ${styles.signInText}`}
          >
            Sign In
          </span>
        </div>
        <div className={styles.userContainer}>
          <Image
            onClick={handleProfile}
            src={"/asset/userIcon.svg"}
            alt=""
            width={24}
            height={24}
          />
          <Image
            src={"/asset/favouriteIcon.svg"}
            alt=""
            width={24}
            height={24}
            onClick={handleFavourite}
          />
          <Image src={"/asset/cartIcon.svg"} alt="" width={60} height={44} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
