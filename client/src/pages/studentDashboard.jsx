import React from 'react'
import { NavBar } from '../components/Common/ForAllPages/navBar'
import { Banner } from '../components/Common/ForAllPages/banner'
import {Tab,Row,Col,Nav} from 'react-bootstrap'
import { FeedbackChoice } from '../components/Student/feedbackChoice';
import {BackpackWrapper} from '../components/Common/Backpack/backpackWrapper'

export const StudentDashboard = () => {
    return (
        <div>
            <div>
                <NavBar />
                <Banner />
                <div style={{ backgroundColor: '',height:'100%',width:'100%' }}>
                    <h5 style={{
                        textAlign: 'center',
                        margin: '20px',
                        textDecoration: 'overline underline black solid 2px',
                        zoom: '150%',
                        fontFamily: 'Lucida Handwriting',
                    }}>
                        Student's DashBoard
                    </h5>
                </div>
            </div>
            <div style={{color:'black'}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Backpack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Feedback</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={7} style={{width:'80%',backgroundColor:''}}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <BackpackWrapper/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <FeedbackChoice/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
    )
}