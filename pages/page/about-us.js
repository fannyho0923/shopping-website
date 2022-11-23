import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";

const Team = ({ img, name, post }) => {
  return (
    <div>
      <div>
        <Media src={img} className="img-fluid blur-up lazyload bg-img" alt="" />
      </div>
      <h4>{name}</h4>
      <h6>{post}</h6>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <CommonLayout parent="home" title="About-us">
        <div
          style={{
            width: "100%",
            backgroundColor: "#9A0201",
            textAlign: "center",
            padding: "1rem 0",
          }}
        >
          <h3 style={{ color: "white" }}>關於師園</h3>
        </div>
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="12">
                <div className="banner-section">
                  <Media
                    src={"aboutus.src"}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg="12">
                <p>-「師園鹹酥雞」老字號新意象 -</p>
                <p>
                  創立40年，師園陪伴著學生、居民，以及慕名而來的饕客走過了一代又一代，當初的學生走到壯年，他們的小孩又成為新的學生，而師園一直在這裡陪大家度過每個歡樂的時光。
                </p>
                <p>
                  師園總是走在最前面，為了帶來既美味又方便的服務，從現場白紙點餐到方便的線上點餐系統、陸續歷經展店、推出聯名T恤及全球第一個鹹酥雞NFT，現在師園結合
                  SaltLab
                  帶來更加便利的線上商城，讓大家透過「師園宇宙線上商城」不用走出門就能享受到第一手的美味。
                </p>
                <br />
                <p>- 突破框架，大膽嘗試 -</p>
                <p>
                  謝老闆曾說：「我們可以大膽嘗試，因為不嘗試打破框架，就沒辦法生存。」
                  師園又將趣味轉化成價值，攜手SaltLab
                  打造「師園宇宙線上商城」，一個結合區塊鏈科技且支援台幣付款同時兼容
                  NFT
                  以及加密貨幣支付等特性的複合式商城，讓消費者可以在享受鹽酥雞的過程中同時體驗區塊鏈科技帶來的革新，陪伴大家從紙本到網路，與大家一同邁向師元宇宙的世界！
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!--Testimonial start--> */}
        <section className="testimonial small-section">
          <Container></Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
