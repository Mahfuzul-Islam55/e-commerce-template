"use client";
import styles from "@/app/components/Sidenav/Sidenav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const otherCategoryOptions = [
  {
    name: "Home",
    id: 1,
    route: "/pages/home",
  },
  {
    name: "Easy Monthly Installments",
    id: 2,
    route: "/pages/installments",
  },
  {
    name: "Shop by Brands",
    id: 3,
    route: "/products",
  },
  {
    name: "Become a Vendor",
    id: 4,
    route: "/pages/vendor",
  },
];

const socialIconList = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    image: "/asset/facebookIcon.svg",
  },
  {
    id: 2,
    link: "https://x.com/",
    image: "/asset/twitterIcon.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/",
    image: "/asset/linkedinIcon.svg",
  },
  {
    id: 4,
    link: "https://www.instagram.com/",
    image: "/asset/instagramIcon.svg",
  },
];

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);

  const toggleSidenav = () => setIsOpen(!isOpen);
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    const getOptions = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setOptions(data);
    };

    getOptions();
  }, []);

  const handleChange = (item: string) => {
    router.push(`/products/category/${item}`);
  };
  return (
    <div className={styles.sidenavContainer}>
      <div>
        <div onClick={toggleSidenav} className={styles.categoryText}>
          <Image src="/asset/sidenavIcon.svg" alt="" width={13} height={12} />
          Brouse By Category
        </div>
        <div className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}>
          <button className={styles.closeBtn} onClick={toggleSidenav}>
            &times;
          </button>
          {options.map((item) => (
            <a
              key={item}
              onClick={() => handleChange(item)}
              style={{ cursor: "pointer" }}
            >
              {item}{" "}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between", flex: "1" }}
      >
        <div className={styles.otherCategoryOptionsContainer}>
          {otherCategoryOptions.map((item) => (
            <div
              key={item.id}
              className={styles.otherCategoryOptions}
              onClick={() => handleRoute(item.route)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className={styles.socialIcons}>
          {socialIconList.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.image}
                alt=""
                width={22}
                height={22}
                style={{ cursor: "pointer" }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
