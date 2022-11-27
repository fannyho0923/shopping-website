import React from "react";
import { Button, Container, Row, Media, Col } from "reactstrap";
import homeLogo from "../public/assets/images/logos/homeLogo.png";
import foxLogo from "../public/assets/images/logos/foxLogo.png";
import hotProductLogo from "../public/assets/images/logos/hotProductLogo.png";
import HeaderOne from "../components/headers/header-one";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
      </Helmet>
      <HeaderOne noTopBar={true} logoName={"logo.png"} topClass="top-header" />
      <Container>
        <div style={{ width: "100%", padding: "0" }}>
          <Media style={{ width: "100%" }} src={homeLogo.src} alt="" />
        </div>
        <div
          style={{
            backgroundColor: "orange",
            padding: "0 4rem",
            marginTop: "6rem",
          }}
        >
          <Row style={{ backgroundColor: "white" }}>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#9A0201",
                  width: "12rem",
                  height: "12rem",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "white" }}>
                  BEST
                  <br />
                  SELLER
                </h3>
                <h3 style={{ color: "white" }}>熱銷產品</h3>
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "279px",
                height: "284px",
              }}
            >
              <Media
                style={{
                  width: "12rem",
                  height: "12rem",
                }}
                src={hotProductLogo.src}
                alt=""
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "fit-content" }}>
                <div
                  style={{
                    color: "#9A0201",
                    border: "solid",
                    width: "fit-content",
                    padding: "0 0.5rem",
                  }}
                >
                  7折
                </div>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      style={{
                        position: "relative",
                        backgroundColor: "orange",
                        border: "0",
                        width: "fit-content",
                        padding: "0.5rem 1rem",
                        marginTop: "1.2rem",
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          left: "-30%",
                          top: "-50%",
                          width: "50%",
                        }}
                        src={foxLogo.src}
                      />
                      使用貝殼支付
                    </Button>
                    <div style={{ textAlign: "end" }}>(加密貨幣付款)</div>
                  </div>
                </div>
                <div style={{ marginTop: "1.2rem" }}>
                  <span
                    style={{ color: "#A3A3A3", textDecoration: "line-through" }}
                  >
                    4580
                  </span>
                  <h5 style={{ display: "inline-block", fontWeight: "bold" }}>
                    &emsp;特惠價$
                  </h5>
                  <h2 style={{ display: "inline-block" }}>3280元</h2>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: "#9A0201",
                      border: "0",
                      width: "fit-content",
                      marginTop: "1.2rem",
                      float: "right",
                    }}
                  >
                    立即購買
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default Fashion;
