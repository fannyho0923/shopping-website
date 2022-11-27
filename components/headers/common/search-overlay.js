import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};
const SearchOverlay = () => {
  return (
    // <div id="search-overlay" className="search-overlay">
    //   <div>
    //     <span className="closebtn" onClick={closeSearch} title="Close Overlay">
    //       ×
    //     </span>
    //     <div className="overlay-content">
    //       <Container>
    //         <Row>
    //           <Col xl="12">
    //             <Form>
    //               <FormGroup>
    //                 <Input
    //                   type="text"
    //                   className="form-control"
    //                   id="exampleInputPassword1"
    //                   placeholder="Search a Product"
    //                 />
    //               </FormGroup>
    //               <Button type="submit" className="btn btn-primary">
    //                 <i className="fa fa-search"></i>
    //               </Button>
    //             </Form>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   </div>
    // </div>
    <Form>
      <FormGroup>
        <div
          class="centered-search"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input
            type="text"
            placeholder="Search a Product"
            style={{
              border: "none",
              background: "none",
              zIndex: 1,
              width: "1.5em",
              height: "1.5em",
              color: "transparent",
              transition: "all 0.3s ease-in 0.3s",
              fontSize: "1.2em",
              lineHeight: "1.2em",
              "&:hover, &:focus": {
                cursor: "text",
              },
              "&:focus": {
                width: "100%",
                outline: "none",
                background: "none",
                color: "#fff",
                padding: "2px 12px",
              },
            }}
          />
          <span
          // style={{
          //   zIndex: -1,
          //   width: "1.5em",
          //   height: "1.5em",
          //   border: "2px solid #fff",
          //   position: "absolute",
          //   borderRadius: "1.5em",
          //   left: 0,
          //   top: 0,
          // }}
          >
            <i className="fa fa-search"></i>
          </span>
        </div>
      </FormGroup>
      <Button type="submit" className="btn btn-primary">
        <i className="fa fa-search"></i>
      </Button>
    </Form>
    // <Form>
    //   <FormGroup>
    //     <Input
    //       type="text"
    //       className="form-control"
    //       id="exampleInputPassword1"
    //       placeholder="Search a Product"
    //     />
    //   </FormGroup>
    //   <Button type="submit" className="btn btn-primary">
    //     <i className="fa fa-search"></i>
    //   </Button>
    // </Form>
  );
};

export default SearchOverlay;
