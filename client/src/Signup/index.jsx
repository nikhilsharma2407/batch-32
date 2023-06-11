import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './style.scss'
function Signup() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <Card className='mt-5 mt-sm-3 p-3 signup-form'>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="userid">
                <Form.Label>Userid</Form.Label>
                <Form.Control placeholder="Enter user id" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="outline-primary">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Signup