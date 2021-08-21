import React, { useState } from 'react';
import "./SignUp.css";
import { Form, Button, InputGroup, Row, Col, Container } from "react-bootstrap";


function SignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (


        <>
            <div className="signUp">
                <Container className="signUp">

                    <h1 className="heading1 shadow-sm  mt-0 p-3 text-center rounded "> WHOLESALE SIGNUP</h1>
                    <Row className="mt-5">
                        <Col lg={8} md={6} sm={12} className=" boxs p-5 m-auto mb-5 shadow-lg rounded-lg">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="form">FIRST NAME *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Mark"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label className="form">LAST NAME *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="form">PHONE </Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="number"
                                            placeholder="Phone"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label className="form">MOBILE PHONE *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="number"
                                            placeholder="Mobile phone"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="form">EMAIL *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="email"
                                            placeholder="Email"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>
                                <hr />

                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="form">COMPANY NAME *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="Company name"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label className="form">COMPANY WEBSITE *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="Company website"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="form">COMPANY ADDRESS *</Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="Company address"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label className="form">ADDRESS 2 </Form.Label>
                                        <Form.Control
                                            className="box"
                                            required
                                            type="text"
                                            placeholder="Address"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label className="form">CITY *</Form.Label>
                                        <Form.Control className="box" type="text" placeholder="City" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                                        <Form.Label className="form">STATE *</Form.Label>
                                        <Form.Control className="box" type="text" placeholder="State" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                                        <Form.Label className="form">ZIP *</Form.Label>
                                        <Form.Control className="box" type="text" placeholder="Zip" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Form.Group className="mb-2">
                                    <Form.Check
                                        className="box"
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Button className="submitButton" type="submit">Sign Up</Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default SignUp;
