import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";
import contactLogo from "../../../public/assets/images/logos/contactLogo.png";
import HeaderOne from "../../../components/headers/header-one";
const ContactDetail = ({ children }) => {
  return (
    <li style={{ display: "flex", width: "100%" }}>
      <div
        className="contact-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        >
          <Media style={{ width: "80%" }} src={contactLogo.src} />
        </div>
      </div>
      <div
        className="media-body"
        style={{
          padding: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#9a0201", fontWeight: "bold" }}>合作聯絡</h4>
        <h6 style={{ color: "#9a0201" }}>歡迎留下您的資訊</h6>
        {children}
      </div>
    </li>
  );
};
const Contact = (props) => {
  return (
    <>
      <HeaderOne
        {...props}
        noTopBar={true}
        logoName={"logo.png"}
        topClass="top-header"
      />
      {/* <CommonLayout parent="home" title="Contact"> */}
      <section className="contact-page section-b-space">
        <Container>
          <Row className="section-b-space">
            <ContactDetail title={"logofghjkkjhj"}>
              <div
                className="rounded"
                style={{
                  backgroundColor: "#9a0201",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4rem",
                }}
              >
                <Form
                  className="theme-form"
                  style={{
                    width: "100%",
                  }}
                >
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Col style={{ display: "flex", marginBottom: "2rem" }}>
                      <Label
                        className="form-label"
                        for="name"
                        style={{
                          whiteSpace: "nowrap",
                          color: "white",
                          margin: "auto",
                        }}
                      >
                        姓名：
                      </Label>
                      <Input
                        type="text"
                        className="form-control rounded"
                        id="name"
                        placeholder="Enter Your name"
                        required=""
                        style={{ margin: "auto" }}
                      />
                    </Col>
                    <Col style={{ display: "flex", marginBottom: "2rem" }}>
                      <Label
                        className="form-label"
                        for="email"
                        style={{
                          whiteSpace: "nowrap",
                          color: "white",
                          margin: "auto",
                        }}
                      >
                        信箱：
                      </Label>
                      <Input
                        type="text"
                        className="form-control rounded"
                        id="email"
                        placeholder="Email"
                        required=""
                        style={{ margin: "auto" }}
                      />
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        marginBottom: "2rem",
                      }}
                    >
                      <Label
                        className="form-label"
                        for="review"
                        style={{
                          whiteSpace: "nowrap",
                          color: "white",
                        }}
                      >
                        手機：
                      </Label>
                      <Input
                        type="text"
                        className="form-control rounded"
                        id="review"
                        placeholder="Enter your number"
                        required=""
                        style={{ margin: "auto" }}
                      />
                    </Col>
                    <Col style={{ display: "flex", marginBottom: "2rem" }}>
                      <Label
                        className="form-label rounded"
                        for="review"
                        style={{ whiteSpace: "nowrap", color: "white" }}
                      >
                        留言：
                      </Label>
                      <textarea
                        className="form-control rounded"
                        placeholder="Write Your Message"
                        id="exampleFormControlTextarea1"
                        rows="6"
                      ></textarea>
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button className="btn btn-solid" type="submit">
                        Send Your Message
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </ContactDetail>
          </Row>
        </Container>
      </section>
      {/* </CommonLayout> */}
    </>
  );
};

export default Contact;
