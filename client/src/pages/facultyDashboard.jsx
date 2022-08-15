import React from "react";
import { Banner } from "../components/Common/ForAllPages/banner";
import { GenerateCOFeedback } from "../components/Faculty/generateCOFeedback";
import { NavBar } from "../components/Common/ForAllPages/navBar";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { AddCourse } from "../components/Faculty/addCourse";
import { ResultChoice } from "../components/Faculty/resultChoice";
import { BackpackWrapper } from '../components/Common/Backpack/backpackWrapper'
export const FacultyDashboard = () => {
  console.log(process.env.REACT_APP_NODEJS_URL);
  return (
    <div>
      <NavBar />
      <Banner />
      <div style={{ backgroundColor: "", height: "100%", width: "100%" }}>
        <h5
          style={{
            textAlign: "center",
            margin: "20px",
            textDecoration: "overline underline black solid 2px",
            zoom: "150%",
            fontFamily: "Lucida Handwriting",
          }}
        >
          Faculty DashBoard
        </h5>
      </div>
      <div style={{ color: "black" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">BackPack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Generate Course CO Feedback
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Add Course</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">FeedBack Results</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={7} style={{ width: "80%", backgroundColor: "" }}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <BackpackWrapper />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <GenerateCOFeedback />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <AddCourse />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <ResultChoice />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};
