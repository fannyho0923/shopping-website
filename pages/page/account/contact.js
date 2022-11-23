import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";

const Data = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "+91 123 - 456 - 7890",
    desc2: "+86 163 - 451 - 7894",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "ABC Complex,Near xyz, New York",
    desc2: "USA 123456",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "Support@Shopcart.com",
    desc2: "info@shopcart.com",
  },
  {
    img: "fa-fax",
    title: "fax",
    desc1: "Support@Shopcart.com",
    desc2: "info@shopcart.com",
  },
];

const ContactDetail = ({ img, title, children }) => {
  return (
    <div style={{ display: "flex", width: "100%", backgroundColor: "" }}>
      <div className="contact-icon">
        <img
          style={{ width: "auto" }}
          src="https://d31pvszaz82ppm.cloudfront.net/2a0d0dd2-7f46-406d-8935-f11d1cfa85f8_480.jpg"
        />
      </div>
      <div className="media-body">{children}</div>
    </div>
  );
};
const Contact = () => {
  return (
    <CommonLayout parent="home" title="Contact">
      <section className="contact-page section-b-space">
        <Container>
          <Row className="section-b-space">
            <ContactDetail title={"logo"}>
              <div
                className="rounded p-4"
                style={{ backgroundColor: "#9a0201" }}
              >
                <Form className="theme-form">
                  <Row>
                    <Col md="6">
                      <Label className="form-label" for="name">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required=""
                      />
                    </Col>
                    <Col md="6">
                      <Label className="form-label" for="email">
                        Email
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                      />
                    </Col>
                    <Col md="6">
                      <Label className="form-label" for="review">
                        Phone number
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        required=""
                      />
                    </Col>
                    <Col md="12">
                      <Label className="form-label" for="review">
                        Write Your Message
                      </Label>
                      <textarea
                        className="form-control"
                        placeholder="Write Your Message"
                        id="exampleFormControlTextarea1"
                        rows="6"
                      ></textarea>
                    </Col>
                    <Col md="12">
                      <button className="btn btn-solid" type="submit">
                        Send Your Message
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </ContactDetail>
          </Row>
          <Row>
            <Col sm="12"></Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Contact;
