import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Creator from "./creator.js";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const router = useRouter();

  useEffect(() => {
    if (address) router.replace("/listings");
  }, [address]);

  return (
    <div className="home">
      <Head>
        <title>Vrifin, World's first NFT renting site</title>
        <meta name="description" content="NFT market place" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=\, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Ubuntu:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=PT+Serif&family=Roboto+Slab&family=Ubuntu:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      {/* <button className="home__button" onClick={connectWithMetamask}>
        Connect using Metamask
      </button> */}

      <nav className="navbar">
        <div className="leftNav">
          <img src="img/vrifin logo.png" alt="logo" />
          <div>Vrifin</div>
        </div>
        <div className="midNav">
          <input
            className="search"
            type="text"
            placeholder="Search items and collections"
          />
        </div>
        <ul className="rightNav">
          <li>
            <a href="exploreNFTs.html">Explore</a>
          </li>
          <li>
            <button className="home__button" onClick={connectWithMetamask}>
              Connect using Metamask
            </button>
          </li>
          <li>
            <a href="about.html">About us</a>
          </li>
        </ul>
      </nav>

      <section className="firstSection">
        <div className="box-main">
          <div className="firstHalf">
            <h1>Discover, Mint and Market your NFTs</h1>
            <h4>Vrifin is the world's first and largest NFT marketing place</h4>
            <div className="firstHalf-btn-container">
              <button>Explore NFTs</button>
            </div>
            <div className="firstHalf-learnMore">
              <p>Learn more about Vrifin</p>
            </div>
          </div>

          <div className="secondHalf">
            <div className="ui link cards card-size">
              <div className="card">
                <div className="image">
                  <img
                    className="mainImg"
                    src="https://marketplace.beyondlife.club/static/media/bigb_art_punk.14cde495.gif"
                    alt="NFTs"
                  />
                </div>
                <div className="content">
                  <div className="header">BigB punks</div>
                  <div className="meta">
                    <a>Amitabh Bachaan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secondSection">
        <div className="secondSection-heading">Featured Vrifin NFTs</div>
        <div className="secondSection-images">
          <a href="https://www.nike.com/in/">
            <img
              className="secondSection-individual-image1"
              src="./img/nike shoes.jpg"
              alt="nft1"
            />
          </a>

          <a href="https://about.facebook.com/">
            <img
              className="secondSection-individual-image2"
              src="./img/meta.jpg"
              alt="nft2"
            />
          </a>

          <a href="https://www2.hm.com/en_in/index.html">
            <img
              className="secondSection-individual-image3"
              src="./img/hm-symbol-logo.png"
              alt="nft3"
            />
          </a>
        </div>
      </section>

      <section className="thirdSection">
        <div className="thirdSection-heading">Tell us about you</div>
        <div className="thirdSection-div1">
          <a href="creator.js" className="thirdSection-links">
            Creator
          </a>
          <a href="/coorporate.html" className="thirdSection-links">
            Coorporate
          </a>
        </div>
      </section>
      <hr />

      <section className="fourthSection">
        <div className="fourthSection-heading">Vrifin</div>
        <div className="fourthSection-container">
          <div className="fourthSection-container1">
            <div className="fourthSection-container1-heading">
              Stay in the loop
            </div>
            <div className="fourthSection-container1-subheading">
              Join our mailing list to get updates of the latest nft projects,
              brand deals and features updates on your Vrifin profile
            </div>
            <div className="fourthSection-container1-inputbox">
              <input className="search" type="text" name="Your email address" />

              <button className="fourthSection-Container1-signup">
                Sign up
              </button>
            </div>
          </div>
          <div className="fourthSection-container2">
            <div className="fourthSection-container2-img"></div>
            <div className="fourthSection-container2-subheading">
              Join the community
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
