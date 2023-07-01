import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './style.scss'
import { signupAPI } from '../apiUtils';
function Signup() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const isValid = name && username && password;

  const signup = async (e) => {
    e.preventDefault();
    const payload = { name, username, password };
    const { data } = await signupAPI(payload);
    console.log(data);
  }


  return (
    <Container fluid>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <Card className='mt-5 mt-sm-3 p-3 signup-form'>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" onChange={e => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="outline-primary" disabled={!isValid} onClick={signup}>
                Signup
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Signup