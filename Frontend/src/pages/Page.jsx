import React from 'react';
import Planner from '../components/Planner';
import AddCourse from '../components/AddCourse';
import Header from '../components/Header';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Page () {
    return (
        <div>
            <Header/>
            <br></br>
            <div>
                <Container>
                    <Row>
                        <Col xs={9}>
                            <Planner/>
                        </Col>
                        <Col xs={3}>
                            <AddCourse/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}