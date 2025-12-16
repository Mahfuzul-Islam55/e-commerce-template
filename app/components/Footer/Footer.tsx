import styles from "@/app/components/Footer/Footer.module.css";
import Image from "next/image";

const footerLinksOptions = [
  {
    title: "Trending",
    titleId: 1,
    links: [
      {
        name: "Installments",
        route: "/",
        id: 1,
      },
      {
        name: "Electronics",
        route: "/",
        id: 2,
      },
      {
        name: "Grocery",
        route: "/",
        id: 3,
      },
      {
        name: "Health & Beauty",
        route: "/",
        id: 4,
      },
      {
        name: "Home Appliances",
        route: "/",
        id: 5,
      },
      {
        name: "Mobile Accessories",
        route: "/",
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
        route: "/",
        id: 1,
      },
      {
        name: "Contact Us",
        route: "/",
        id: 2,
      },
      {
        name: "FAQs",
        route: "/",
        id: 3,
      },
      {
        name: "Shipping & Return",
        route: "/",
        id: 4,
      },
      {
        name: "Privacy policy",
        route: "/",
        id: 5,
      },
      {
        name: "Terms & Conditions",
        route: "/",
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
        route: "/",
        id: 1,
      },
      {
        name: "Track Your Order",
        route: "/",
        id: 2,
      },
      {
        name: "Recently Viewed",
        route: "/",
        id: 3,
      },
      {
        name: "Wishlist",
        route: "/",
        id: 4,
      },
      {
        name: "Compare",
        route: "/",
        id: 5,
      },
      {
        name: "Become a Vendor",
        route: "/",
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
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfoContainer}>
          <div className={styles.contactContainer}>
            <div
              style={{ width: "9.45vw", height: "3.4vw", position: "relative" }}
            >
              <Image src={"/asset/logo.svg"} alt="" fill property="" />
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
              <Image
                src="/asset/facebookIcon.svg"
                alt=""
                width={11}
                height={22}
                style={{ cursor: "pointer" }}
              />
              <Image
                src="/asset/twitterIcon.svg"
                alt=""
                width={22}
                height={18}
                style={{ cursor: "pointer" }}
              />
              <Image
                src="/asset/linkedinIcon.svg"
                alt=""
                width={22}
                height={22}
                style={{ cursor: "pointer" }}
              />
              <Image
                src="/asset/instagramIcon.svg"
                alt=""
                width={22}
                height={22}
                style={{ cursor: "pointer" }}
              />
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
                        <h5 key={link.id} className={styles.otherLinks}>
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
