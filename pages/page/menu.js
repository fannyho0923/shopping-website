import React, { useCallback, useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Button, Container, Row, Col, Media } from "reactstrap";
import menu1 from "../../public/assets/images/menu/menu1.png";
import menu2 from "../../public/assets/images/menu/menu2.png";
import HeaderOne from "../../components/headers/header-one";
const Menu = (props) => {
  const [menu, setMenu] = useState(menu1);

  return (
    <>
      <HeaderOne
        {...props}
        noTopBar={true}
        logoName={"logo.png"}
        topClass="top-header"
      />
      {/* <CommonLayout parent="home" title="Menu"> */}
      {/* // <!-- about section start --> */}
      <section className="about-page section-b-space">
        <Container>
          <Col
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                paddingTop: "4rem",
                width: "20%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Row
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#9A0201",
                    padding: "2rem 1rem",
                    width: "min-content",
                    border: "0",
                  }}
                  onClick={() => setMenu(menu1)}
                >
                  師<br />大<br />店
                </Button>
                <Button
                  style={{
                    backgroundColor: "#9A0201",
                    marginTop: "2rem",
                    padding: "2rem 1rem",
                    width: "min-content",
                    border: "0",
                  }}
                  onClick={() => setMenu(menu2)}
                >
                  西<br />門<br />店
                </Button>
              </Row>
            </div>

            <Col>
              <Row lg="12">
                <div
                  className="banner-section"
                  style={{
                    width: "70%",
                  }}
                >
                  <Media
                    src={menu.src}
                    className="img-fluid blur-up lazyload"
                    alt="ertyhjk"
                  />
                </div>
              </Row>
            </Col>
          </Col>
        </Container>
      </section>

      {/* <!--Testimonial start--> */}
      <section className="testimonial small-section">
        <Container></Container>
      </section>
      {/* </CommonLayout> */}
    </>
  );
};

export default Menu;
