import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { loginAPI } from '../apiUtils';
import './style.scss'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [showResetForm, setshowResetForm] = useState(false);


  const login = async() => {
    const payload = { username, password };
    const { data } = await loginAPI(payload);
    console.log(data);
  }
  return (
    <Container fluid>
      <Row>
        <Col lg={{ offset: 4, span: 4 }} md={{ offset: 3, span: 6 }} sm={{ offset: 1, span: 10 }}>
          {!showResetForm ? <Card className="mt-3 p-3 signup">
            <Card.Title>Login</Card.Title>
            <Card.Body>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <div className='forgot-pwd'> <span onClick={() => setshowResetForm(true)}>Forgot Password</span>
                <Link style={{ textDecoration: "none", marginLeft: '10px' }} to='/signup' >Signup</Link></div>
              <Button variant="outline-primary" type="submit" disabled={!(username.length > 0 && password.length > 0)} onClick={login}>
                Login
              </Button>
            </Card.Body>
          </Card> : <Card className="mt-3 p-3 signup">
            <Card.Title> Reset Password</Card.Title>
            <Card.Body>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="otp">
                <Form.Label>OTP </Form.Label>
                <Form.Control type="number" placeholder="code from Google Authenticator" onChange={e => setOtp(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!(username.length > 0 && password.length > 0 && otp.length)}>
                Reset Password
              </Button>
            </Card.Body>
          </Card>}


        </Col>
      </Row>
    </Container>
  )

}

export default Login