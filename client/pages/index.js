import { useRef, useEffect, useState, useContext } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const headerRef = useRef(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  const themeContext = useContext(ThemeContext);

  return (
    <Layout page="home" headerRef={headerRef}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="main" id="home">
        <div className="main-text-holder">
          <div className="main-text-holder-heading" ref={headerRef}>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-dark.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-dark.png" />
              {themeContext.theme === "dark" ? (
                <Image
                  src="/images/DSC_JSSSTU-dark.png"
                  className="logo"
                  alt="DSC JSSSTU"
                  priority="true"
                  width={350}
                  height={80}
                />
              ) : (
                <></>
              )}
            </picture>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-color.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-color.png" />
              {themeContext.theme === "light" ? (
                <Image
                  src="/images/DSC_JSSSTU-color.png"
                  className="logo-light"
                  alt="DSC JSSSTU"
                  priority={true}
                  width={350}
                  height={80}
                />
              ) : (
                <></>
              )}
            </picture>
          </div>
          <h2>Powered by Google Developers</h2>
          <p className="continous-text">
            At DSC JSSSTU, our aim is to learn and teach. Developers, designers
            and managers come together under one roof to create a community
            which inspires thousands. Join Us!
          </p>
        </div>
        <Link href="#our-work">
          <div className="main-down-arrow" id="down-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-966 -967.48)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M982,967.98V1011.1"
                  transform="translate(-1.5)"
                  fill="none"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeWidth={1}
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M966.813,997.8l13.973,13.577L994.363,997.8"
                  transform="translate(-0.313)"
                  fill="none"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </div>
        </Link>
        <img src="/images/landing.svg" className="main-image" alt="Home Page" />
      </div>
      <div className="container-main holded-container" id="our-work">
        <h1 data-aos="fade-up" className=" text-center">
          Our Focus
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <p data-aos="fade-up" className="text-center">
          That said, we conduct two flagship events, namely, DevFest and
          WomenTechies, and tons of insightful workshops!
        </p>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          About JSSSTU
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          JSS Science and Technology University, popularly known as SJCE or
          JSSSTU, is a private university located in Mysore, Karnataka, India.
          SJCE was Established in 1963. JSS S&T University is committed to
          deliver high quality educational opportunities for youth and transform
          not only its neighborhood but offer courses to equip aspiring youth to
          meet the global needs of industry in every sector.
        </p>
        <a href="http://jssstuniv.in/" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Learn More</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container" id="team">
        <h1 data-aos="fade-up" className=" text-center">
          Get to know the team
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We’ve got a strong team filled with caffeine addicted developers,
          gradients loving designers and machine like working managers.
        </p>
        <Link href="/team">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Meet The Team</div>
          </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="updates">
        <h1 data-aos="fade-up" className=" text-center">
          Updates
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We are actively conducting workshops, and also contributing to the
          development side by churning out high quality projects.
        </p>
        <Link href="/projects">
          <div data-aos="fade-up" className="buttons">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Projects</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="blog">
        <h1 data-aos="fade-up" className=" text-center">
          Our Blogs
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Our prime focus is to learn and disseminate knowledge. Our team roll
          out blogs regularly on Medium.
        </p>
        <div data-aos="fade-up" className="buttons">
          <a href="https://medium.com/dscjssstu">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Check out</div>
            </div>
          </a>
        </div>
      </div>
      <div className="container-main holded-container" id="contact">
        <h1 data-aos="fade-up" className=" text-center">
          Contact us
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We’re very active on social media.
        </p>
        <div data-aos="fade-up" className="icons small-icons">
          <a
            href="https://instagram.com/dscjssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Instagram.svg"
              className="circle-icon"
              alt="DSC JSSSTU Instagram"
            />
          </a>
          {/* <a href="https://twitter.com/dscvit" target="_blank" rel="noopener">
            <img
              src="images/Twitter.svg"
              className="circle-icon"
              alt="DSC JSSSTU Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Linkedin.svg"
              className="circle-icon"
              alt="DSC JSSSTU Linkedin"
            />
          </a>
          {/* <a
            href="https://facebook.com/dscvitvellore"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Facebook.svg"
              className="circle-icon"
              alt="DSC JSSSTU Facebook"
            />
          </a> */}
          <a
            href="https://github.com/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Github.svg"
              className="circle-icon"
              alt="DSC JSSSTU GitHub"
            />
          </a>
          {/* <a
            href="https://www.behance.net/dsc-vit"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Behance.svg"
              className="circle-icon"
              alt="DSC JSSSTU Behance"
            />
          </a> */}
          <a href="https://medium.com/dscjssstu" target="_blank" rel="noopener">
            <img
              src="/images/Medium.svg"
              className="circle-icon"
              alt="DSC JSSSTU Medium"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UChpUfrwmW4MdNHRSC09cK2g"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Youtube.svg"
              className="circle-icon"
              alt="DSC JSSSTU Youtube"
            />
          </a>
        </div>
      </div>
      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          Partners
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Thank you to our Partners for their support towards the community. If
          you want to be showcased through DSC JSSSTU, contact us for
          Sponsorship details.
        </p>
        <a href="/ideas" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Get In Touch</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          Submit an idea
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Didn’t get a chance to implement your favourite idea? Why not give us
          a chance to bring it to real life?
        </p>
        <a href="/ideas" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Submit idea</div>
          </div>
        </a>
      </div>

      <div className="footer container-main  container-main-last">
        <div
          className="dark-light-toggle  text-center"
          id="dark-light-toggle"
        ></div>
      </div>
    </Layout>
  );
}
