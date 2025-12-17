import styles from "@/app/components/Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const footerLinksOptions = [
  {
    title: "Trending",
    titleId: 1,
    links: [
      {
        name: "Installments",
        route: "/pages/home",
        id: 1,
      },
      {
        name: "Electronics",
        route: "/pages/home",
        id: 2,
      },
      {
        name: "Grocery",
        route: "/pages/home",
        id: 3,
      },
      {
        name: "Health & Beauty",
        route: "/pages/home",
        id: 4,
      },
      {
        name: "Home Appliances",
        route: "/pages/home",
        id: 5,
      },
      {
        name: "Mobile Accessories",
        route: "/pages/home",
        id: 6,
      },
    ],
  },
  {
    title: "Information",
    titleId: 2,
    links: [
      {
        name: "About Us",
        route: "/pages/home",
        id: 1,
      },
      {
        name: "Contact Us",
        route: "/pages/home",
        id: 2,
      },
      {
        name: "FAQs",
        route: "/pages/home",
        id: 3,
      },
      {
        name: "Shipping & Return",
        route: "/pages/home",
        id: 4,
      },
      {
        name: "Privacy policy",
        route: "/pages/home",
        id: 5,
      },
      {
        name: "Terms & Conditions",
        route: "/pages/home",
        id: 6,
      },
    ],
  },
  {
    title: "Customer Care",
    titleId: 3,
    links: [
      {
        name: "My Account",
        route: "/pages/home",
        id: 1,
      },
      {
        name: "Track Your Order",
        route: "/pages/home",
        id: 2,
      },
      {
        name: "Recently Viewed",
        route: "/pages/home",
        id: 3,
      },
      {
        name: "Wishlist",
        route: "/pages/home",
        id: 4,
      },
      {
        name: "Compare",
        route: "/pages/home",
        id: 5,
      },
      {
        name: "Become a Vendor",
        route: "/pages/home",
        id: 6,
      },
    ],
  },
];

const cardImageList = [
  {
    id: 1,
    image: "/asset/visaCardImage.png",
  },
  {
    id: 2,
    image: "/asset/masterCardImage.png",
  },
  {
    id: 3,
    image: "/asset/cashCardImage.png",
  },
  {
    id: 4,
    image: "/asset/installmentCardImage.png",
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

const Footer = () => {
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfoContainer}>
          <div className={styles.contactContainer}>
            <div
              style={{ width: "9.45vw", height: "3.4vw", position: "relative" }}
            >
              <Link href={"/"}>
                <Image src={"/asset/logo.svg"} alt="" fill property="" />
              </Link>
            </div>

            <h3 className={styles.contactText}>Got questions? Call us 24/7!</h3>
            <h5 className={styles.phone}>
              03 111 666 144
              <br />
              0317 1777015.
            </h5>
            <h3 className={styles.contactText}>
              Contact info <br />
              <span className={styles.phone}>info@winstore.pk</span>
            </h3>

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

          <div>
            <div className={styles.otherLinksContainer}>
              {footerLinksOptions.map((section) => (
                <div key={section.titleId}>
                  <div className={styles.otherLinksOptions}>
                    <h3 className={styles.otherLinksTitle}>{section.title}</h3>
                    {Array.isArray(section.links) &&
                      section.links.map((link) => (
                        <h5
                          key={link.id}
                          className={styles.otherLinks}
                          onClick={() => handleRoute(link.route)}
                        >
                          {link.name}
                        </h5>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cardContainer}>
              {cardImageList.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt=""
                  width={97}
                  height={55}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.copywrite}>
        © 2021 Winstore. All Rights Reserved.
      </h3>
    </>
  );
};

export default Footer;
