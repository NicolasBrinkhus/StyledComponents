import React, { useState } from "react";
import FrontPage1Style from "./stylesPage1/FrontPage1Style";
import NavButtonStyle from "./stylesPage1/NavButtonStyle";
import NavBgStyle from "./stylesPage1/NavBgStyle";
import NavListStyle from "./stylesPage1/NavListStyle";
import HeaderStyle from "./stylesPage1/HeaderStyle";
import {
  logowhite,
  nat1,
  nat1large,
  nat2,
  nat2large,
  nat3,
  nat3large,
  nat8,
  nat9
} from "./static";
import videowebm from "./static/videowebm.webm";
import videomp4 from "./static/videomp4.mp4";
import BTN2 from "../buttonStyles/button2";
import Title1Style from "./stylesPage1/Title1Style";
import Title2Style from "./stylesPage1/Title2Style";
import SectionAboutStyle from "./stylesPage1/SectionAboutStyle";
import FirstRowStyle from "./stylesPage1/FirstRowStyle";
import Title3Style from "./stylesPage1/Title3Style";
import CompositionStyle from "./stylesPage1/CompositionStyle";
import SectionFeatureStyle from "./stylesPage1/SectionFeatureStyle";
import FeatureBoxStyle from "./stylesPage1/FeatureBoxStyle";
import SectionTourStyle from "./stylesPage1/SectionTourStyle";
import CardStyle from "./stylesPage1/CardStyle";
import SectionStorieStyle from "./stylesPage1/SectionStorieStyle";
import BGVideoStyle from "./stylesPage1/BGVideoStyle";
import StoryStyle from "./stylesPage1/StoryStyle";

function FrontPage1() {
  let [nav, setNav] = useState(false);

  return (
    <FrontPage1Style>
      <div className="navigation">
        <input
          id="navi-toggle"
          type="checkbox"
          style={{ display: "none" }}
          onClick={() => setNav(!nav)}
          value={nav}
        />

        <NavButtonStyle for="navi-toggle">
          <span>&nbsp;</span>
        </NavButtonStyle>

        {nav && (
          <>
            <NavBgStyle />
            <NavListStyle>
              <ul>
                <li>
                  <a href="/">
                    <span>01</span>About Natous
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>02</span>Your Benefits
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>03</span>Popular tours
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>04</span>Stories
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>05</span>Book Now
                  </a>
                </li>
              </ul>
            </NavListStyle>
          </>
        )}
      </div>

      <HeaderStyle>
        <div className="logo-box">
          <img src={logowhite} alt="" />
        </div>

        <div className="text-box">
          <Title1Style>
            <span className="main">Outdoors</span>
            <span className="sub">is where life happens</span>
          </Title1Style>

          <BTN2>Discover our tours</BTN2>
        </div>
      </HeaderStyle>

      <main>
        <SectionAboutStyle>
          <div style={{ textAlign: "center", marginBottom: "8rem" }}>
            <Title2Style>Exciting tours for adventurous people</Title2Style>
          </div>

          <FirstRowStyle>
            <div style={{ width: "50%" }}>
              <Title3Style>
                You-re going to fall inlove with nature!
              </Title3Style>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac placerat lectus, a pulvinar Fusce ac placerat lectus, a
                pulvinar quam. Vestibulum lectus erat, marcu.
              </p>

              <Title3Style>
                Live adventures like you never have before!
              </Title3Style>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac placerat lectus, a pulvinar quam. Vestibulum lectus erat,
                marcu.
              </p>
            </div>
            <div style={{ width: "50%" }}>
              <CompositionStyle>
                <img
                  srcset={`${nat1} 300w, ${nat1large} 1000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="photo photo--p1"
                  src={nat1large}
                />

                <img
                  srcset={`${nat2} 300w, ${nat2large} 2000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="photo photo--p2"
                  src={nat2large}
                />

                <img
                  srcset={`${nat3} 300w, ${nat3large} 3000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="photo photo--p3"
                  src={nat3large}
                />
              </CompositionStyle>
            </div>
          </FirstRowStyle>
        </SectionAboutStyle>

        <SectionFeatureStyle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              justifyItems: "center"
            }}
          >
            <FeatureBoxStyle>
              <i className="icon icon-basic-world"></i>
              <Title3Style>Explore the World</Title3Style>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac placerat lectus, a pulvinar quam. Vestibulum lectus erat,
                marcu.
              </p>
            </FeatureBoxStyle>

            <FeatureBoxStyle>
              <i className="icon icon-basic-compass"></i>
              <Title3Style>Meet Nature</Title3Style>
              <p>
                Lorem e Vestibulum lectus erat, marcu.Lorem e Vestibulum lectus
                erat, marcu.
              </p>
            </FeatureBoxStyle>

            <FeatureBoxStyle>
              <i className="icon icon-basic-map"></i>
              <Title3Style>Find your Way</Title3Style>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac placerat lectus, a pulvinar quam.
              </p>
            </FeatureBoxStyle>

            <FeatureBoxStyle>
              <i className="icon icon-basic-heart"></i>
              <Title3Style>Live a Healthier Life!</Title3Style>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac placerat lectus, lectus erat, marcu.
              </p>
            </FeatureBoxStyle>
          </div>
        </SectionFeatureStyle>

        <SectionTourStyle>
          <div style={{ textAlign: "center", marginBottom: "8rem" }}>
            <Title2Style>Most popular tours</Title2Style>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              justifyItems: "center"
            }}
          >
            <CardStyle>
              <div className="side side--front">
                <div className="picture picture--1">&nbsp;</div>
                <h4 className="heading">
                  <span className="heading-span heading-span--1">
                    The Sea Explore
                  </span>
                </h4>

                <div className="details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="side side--back side--back-1">
                <div className="cta">
                  <div className="price-box">
                    <p className="price-only">Only</p>
                    <p className="price-value">$297</p>
                    <BTN2 size="20rem">Book now</BTN2>
                  </div>
                </div>
              </div>
            </CardStyle>

            <CardStyle>
              <div className="side side--front">
                <div className="picture picture--2">&nbsp;</div>
                <h4 className="heading">
                  <span className="heading-span heading-span--2">
                    The Forest Hiker
                  </span>
                </h4>

                <div className="details">
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="side side--back side--back-2">
                <div className="cta">
                  <div className="price-box">
                    <p className="price-only">Only</p>
                    <p className="price-value">$497</p>
                    <BTN2 size="20rem">Book now</BTN2>
                  </div>
                </div>
              </div>
            </CardStyle>

            <CardStyle>
              <div className="side side--front">
                <div className="picture picture--3">&nbsp;</div>
                <h4 className="heading">
                  <span className="heading-span heading-span--3">
                    The Snow Adventure
                  </span>
                </h4>

                <div className="details">
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="side side--back side--back-3">
                <div className="cta">
                  <div className="price-box">
                    <p className="price-only">Only</p>
                    <p className="price-value">$897</p>
                    <BTN2 size="20rem">Book now</BTN2>
                  </div>
                </div>
              </div>
            </CardStyle>
          </div>

          <div style={{ textAlign: "center", marginTop: "6rem" }}>
            <BTN2 color="green" fontColor="white" size="25rem">
              Discover all tours
            </BTN2>
          </div>
        </SectionTourStyle>

        <SectionStorieStyle>
          <BGVideoStyle>
            <video className="content" autoPlay muted loop>
              <source src={videomp4} type="video/mp4" />
              <source src={videowebm} type="video/webm" />
              Your browser is not supported!
            </video>
          </BGVideoStyle>

          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <Title2Style>We make people genuinely happy</Title2Style>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "75vh",
              justifyContent: "space-evenly"
            }}
          >
            <StoryStyle>
              <figure className="shape">
                <img src={nat8} alt="Person on a tour" className="img" />
                <figcaption className="caption">Mary Smith</figcaption>
              </figure>

              <div className="text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ac placerat lectus, lectus erat, marcu.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fusce ac placerat lectus,
                  lectus erat, marcu.
                </p>
              </div>
            </StoryStyle>
            <StoryStyle>
              <figure className="shape">
                <img src={nat9} alt="Person on a tour" className="img" />
                <figcaption className="caption">Jack Wilson</figcaption>
              </figure>

              <div className="text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Wow, My life is completely different now.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ac placerat lectus, lectus erat, marcu.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fusce ac placerat lectus,
                  lectus erat, marcu. Fusce ac placerat lectus, lectus erat,
                  marcu.
                </p>
              </div>
            </StoryStyle>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="/" className="btn-text">
              Read all Stories &rarr;
            </a>
          </div>
        </SectionStorieStyle>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label for="name" className="form__label">
                      Full Name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email Address"
                      id="email"
                      required
                    />
                    <label for="email" className="form__label">
                      Email Address
                    </label>
                  </div>

                  <div className="form__group">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour Group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour Group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green u-margin-top-small">
                      Next step &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
              media="(max-width: 37.5em)"
            />
            <img
              srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
              alt="Full Logo"
            />
          </picture>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Contact Us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Privacy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Build my{" "}
              <a href="/" className="footer__link">
                Nícolas Brinkhus
              </a>{" "}
              for his online course{" "}
              <a href="/" className="footer__link">
                Advanced CSS and SASS
              </a>
              . Copyright &copy; by Nícolas Brinkhus. You are 100% allowed to
              use this webpage fot both personal and commercial use, but NOT to
              claim it as your own design. A credit to the original author,
              Jonas Schmedtmann, is of course highly appreciated!
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src="img/nat-8.jpg" alt="" className="popup__img" />
            <img src="img/nat-9.jpg" alt="" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-medium">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &nbsp; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              placerat lectus, lectus erat, marcu.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fusce ac placerat lectus, lectus
              erat, marcu. Fusce ac placerat lectus, lectus erat, marcu. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              placerat lectus, lectus erat, marcu.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fusce ac placerat lectus, lectus
              erat, marcu. Fusce ac placerat lectus, lectus erat, marcu
            </p>
            <a href="/" className="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </FrontPage1Style>
  );
}

export default FrontPage1;
