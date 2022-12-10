import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <Row className="product-page-main m-0">
              <Nav tabs className="nav-material">
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    商品資訊
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="nav-material">
                <TabPane tabId="1">
                  <p className="mb-0 pb-0">
                    內容量：85g 內容物名稱：
                    雞、水、裹漿粉(小粉、粉、薯粉、玉米、
                    眾香子)、酥炸粉(樹薯澱粉、麵粉)肉粉(糖、鹽、粉
                    、L-麩酸鈉、蒜粉(蒜粉、二氧化矽)、白胡椒粉[紅薯渣粉地瓜渣
                    粉)、青辣椒粉、黑胡椒粉、小茴香粉、胡椒粉]、五香粉肉桂
                    粉、丁香、小茴香、八角、甘草粉)、品質改良劑[焦磷酸鈉(無水)
                    、多磷酸鈉]、辣椒粉、百草粉肉、丁香、山奈、甘草、小茴香
                    )、香料。
                  </p>
                </TabPane>
              </TabContent>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
