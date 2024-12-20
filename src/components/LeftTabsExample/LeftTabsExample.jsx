import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import widget from '../../assets/images/preview-story-widget.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";


export default function LeftTabsExample() {
  return (
    <div className="container tabs-info">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="tabs-content">
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img src={widget} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img src={widget} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img src={widget} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img src={widget} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img src={widget} alt="" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <h1 className="tab-title">Widgets for every website.</h1>
              <Nav.Item>
                <Nav.Link className="tab-item" eventKey="first">
                  <img src={icon1} alt="" />
                  <span>Highlights</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-item" eventKey="second">
                  <img src={icon2} alt="" />
                  <span>Popover</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-item" eventKey="third">
                  <img src={icon3} alt="" />
                  <span>Inline slideshows</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-item" eventKey="fourth">
                  <img src={icon4} alt="" />
                  <span>Story list gallery</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-item" eventKey="fifth">
                  <img src={icon5} alt="" />
                  <span>Carousel gallery</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
