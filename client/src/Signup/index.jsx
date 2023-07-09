import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './style.scss'
import { signupAPI } from '../apiUtils';
import { Link } from 'react-router-dom';
function Signup() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const isValid = name && username && password;

  const [qrcode, setqrcode] = useState(null)

  const signup = async (e) => {
    e.preventDefault();
    const payload = { name, username, password };
    const { data } = await signupAPI(payload);
    console.log(data);
    setqrcode(data.data)
  }


  return (
    <Container fluid>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <Card className='mt-5 mt-sm-3 p-3 signup-form'>
            <Card.Body>
              {!qrcode ? <Form>
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
              </Form> :
                <>
                  <h1>Two Factor authentication setup</h1>
                  <h2>Please scan the QR code with Google Authenticator</h2>
                  <div className='d-flex flex-column'>
                    <img src={qrcode} style={{
                      height: "200px",
                      width: "200px",
                      alignSelf: "center"
                    }} />
                    <Button variant='outline-primary' as={Link} to='/login'>
                      Proceed to Login
                    </Button>
                  </div>
                </>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Signup