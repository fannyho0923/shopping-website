import React, { useEffect, useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooter = ({
  logoName,
  layoutClass,
  footerClass,
  belowSection,
  belowContainerFluid,
  CopyRightFluid,
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
                    <div className="footer-logo" style={{ marginBottom: "0" }}>
                      <LogoImage logo={logoName} />
                    </div>
                    <p>
                      師大夜市師園鹽酥雞創立於民國73年。
                      因為食材品質良好且堅持每日換新油, 深得老饕的喜愛。
                      現在因應顧客的要求, 增加了即時外送的服務,
                      讓您不論在辦公室、聚會、派對, 都能享受到熱騰騰的外送美食。
                    </p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a
                            href="https://zh-tw.facebook.com/ShiYun23633999/"
                            target="_blank"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:gcappuccino@gmail.com"
                            target="_blank"
                          >
                            <i
                              className="fa fa-google-plus"
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
                        <p>師園鹽酥雞(師大)</p>
                        <li>
                          <i className="fa fa-phone"></i>
                          <a href="tel:0223633999">Tel: 02 2363 3999</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Order:
                          <a href="https://reurl.cc/eWdNVM" target="_blank">
                            Uber eat
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>
                          <a
                            href="https://www.google.com/search?q=%E8%A9%A9%E5%9C%92%E9%B9%B9%E9%85%A5%E9%9B%9E&oq=%E8%A9%A9%E5%9C%92&aqs=chrome.1.69i57j0i512j46i175i199i512j0i512j46i175i199i512.4357j0j1&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsZo_f2B9o56rKXXmJ-D3SIfuzSwxQ:1669513943845&rflfq=1&num=10&rldimm=9809195174459561477&lqi=Cg_oqanlnJLpubnphaXpm55IyIOok-aAgIAIWikQABABEAIQAxAEGAAYARgCGAMYBCIT6KmpIOWckiDpubkg6YWlIOmbnpIBEnNrZXdlcl9kZWVwX2ZyeWluZ6oBHwoKL20vMHNnZ2szMxABKg8iC-m5uSDphaUg6ZueKEU&phdesc=Ge6Hovhxke8&ved=2ahUKEwjD4MeMoM37AhUWDd4KHTZJAAgQvS56BAgQEAE&sa=X&rlst=f#rlfi=hd:;si:;mv:[[25.0435642,121.53036180000001],[25.023458599999998,121.50534279999998]]"
                            target="_blank"
                          >
                            台北市大安區 師大路39巷14號
                          </a>
                        </li>
                      </ul>
                      <ul
                        className="contact-list"
                        style={{ marginLeft: "1rem" }}
                      >
                        <p>師園鹽酥雞 (西門店)</p>
                        <li>
                          <i className="fa fa-phone"></i>
                          <a href="tel:0223143966">Tel: 02 2314 3966</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Order:
                          <a href="https://reurl.cc/85Ng9M" target="_blank">
                            Uber eat
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>
                          <a
                            href="https://www.google.com/search?q=%E8%A9%A9%E5%9C%92%E9%B9%B9%E9%85%A5%E9%9B%9E&oq=%E8%A9%A9%E5%9C%92&aqs=chrome.1.69i57j0i512j46i175i199i512j0i512j46i175i199i512.4357j0j1&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsZo_f2B9o56rKXXmJ-D3SIfuzSwxQ:1669513943845&rflfq=1&num=10&rldimm=9809195174459561477&lqi=Cg_oqanlnJLpubnphaXpm55IyIOok-aAgIAIWikQABABEAIQAxAEGAAYARgCGAMYBCIT6KmpIOWckiDpubkg6YWlIOmbnpIBEnNrZXdlcl9kZWVwX2ZyeWluZ6oBHwoKL20vMHNnZ2szMxABKg8iC-m5uSDphaUg6ZueKEU&phdesc=Ge6Hovhxke8&ved=2ahUKEwjD4MeMoM37AhUWDd4KHTZJAAgQvS56BAgQEAE&sa=X&rlst=f#rlfi=hd:;si:;mv:[[25.106749191244425,121.74971227005202],[24.94062397052552,121.39952306106764],null,[25.023714686952562,121.57461766555983],12]"
                            target="_blank"
                          >
                            台北市萬華區 成都路28號
                          </a>
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
