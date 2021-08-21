import React from 'react';
import "./Login.css";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Login() {

    return (
        <>
            <div className="login">
                <Container className="login">

                    <h1 className="heading shadow-sm  mt-0 p-3 text-center rounded "> WHOLESALE LOGIN</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className=" boxs p-5 m-auto mb-5 shadow-lg rounded-lg">
                            <Form className="mb-0">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="form">Email address</Form.Label>
                                    <Form.Control className="box" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="form">Password</Form.Label>
                                    <Form.Control className="box" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="box" type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className="submitButton" variant="primary" type="submit">
                                    Log In
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default Login;
