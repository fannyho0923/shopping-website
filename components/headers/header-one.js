import React, { useContext, useState, useEffect } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import { Button, Media, Container, Row, Col } from "reactstrap";
import foxLogo from "../../public/assets/images/logos/foxLogo.png";
import LogoImage from "./common/logo";
import search from "../../public/assets/images/icon/search.png";
import language from "../../public/assets/images/icon/language.png";
import cart from "../../public/assets/images/icon/cart.png";
import { WalletContext } from "../../helpers/Wallet/WalletContext";
import Currency from "./common/currency";
import { useRouter } from "next/router";
import SearchOverlay from "./common/search-overlay";

const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const router = useRouter();
  const walletContext = useContext(WalletContext);
  const wallet = walletContext.state.walletContext;
  const setWallet = walletContext.setWallet;

  const connectWallet = () => {
    console.log(wallet);
    setWallet(
      wallet
        ? {
            walletContext: "",
          }
        : {
            walletContext: "0xbb...e1Be",
          }
    );
  };

  /*=====================
     Pre loader
     ==========================*/
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    if (router.asPath !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  // eslint-disable-next-line
  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        {noTopBar ? "" : <TopBarDark topClass={topClass} />}

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="brand-logo">
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <NavBar />

                  <div>
                    <div className="icon-nav">
                      <ul style={{ display: "flex" }}>
                        <li
                          style={{ display: "flex" }}
                          className="onhover-div mobile-search"
                        >
                          <SearchOverlay />
                          <div>
                            <Media
                              src={search.src}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                          </div>
                        </li>
                        <Currency icon={language.src} />
                        {/*Header Cart Component */}
                        {direction === undefined ? (
                          // <></>
                          <CartContainer layout={direction} icon={cart.src} />
                        ) : (
                          <Cart layout={direction} icon={cart.src} />
                        )}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <li
                            style={{
                              marginLeft: "2rem",
                            }}
                          >
                            <Button
                              class="rounded"
                              style={{
                                width: "115px",
                                position: "relative",
                                background: "Button",
                                backgroundColor: "#d9d9d9",
                                color: "black",
                                border: "0",
                                paddingLeft: "1.5rem",
                              }}
                              onClick={connectWallet}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  left: "-30%",
                                  top: isConnected ? "-40%" : "-35%",
                                  width: "50%",
                                }}
                                src={foxLogo.src}
                              />
                              {wallet ? wallet : "連結錢包"}
                            </Button>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HeaderOne;
