import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  CopyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);
  return (
    <div>
      <footer className={footerClass}>
        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row
              className="footer-theme partition-f"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse == 1 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    about
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,
                    </p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://plus.google.com" target="_blank">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Collapse>
              </Col>
              <Col>
                <div
                  className="sub-title"
                  style={{ width: "fit-content", float: "right" }}
                >
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 4 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                    >
                      store information
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div
                      className="footer-contant"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>師園鹽酥雞(師大)
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>Tel: 02 2363 3999
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Order:{" "}
                          <a href="#">Uber eat</a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>台北市大安區
                          師大路39巷14號
                        </li>
                      </ul>
                      <ul
                        className="contact-list"
                        style={{ marginLeft: "1rem" }}
                      >
                        <li>
                          <i className="fa fa-map-marker"></i>師園鹽酥雞
                          (西門店)
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>Tel: 02 2314 3966
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Order:{" "}
                          <a href="#">Uber eat</a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>台北市萬華區
                          成都路28號
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={CopyRightFluid ? CopyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
