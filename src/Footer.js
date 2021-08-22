import React from 'react';
import "./Footer.css";
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";



function Footer() {
    return (
        <>
            <div className="footer">
                <Container className="footers">
                    <h1 className="h1">COMPANY</h1>

                    <p>Shipping</p>
                    <p>Return Policy</p>
                    <p>Work With Us</p>
                    <p>Term & Conditions</p>


                </Container>
                <Container className="footers">
                    <h1 className="h1">FOLLOW US OUT THERE</h1>

                    <p className="p">Facebook</p>

                    <p className="p">Twitter</p>

                    <p className="p">Pinterest</p>

                    <p className="p">Instagram</p>




                </Container>
                <Container className="footers">
                    <h1 className="h1">THANK YOU</h1>

                    <p>Thank you to the wonderful folks over<br />
                        at Herbivore for letting us use their<br />
                        beautiful imagery in this demo. Head<br /> over
                        to their store to shop their full <br />catalog of
                        amazing products.
                    </p>




                </Container>

                <Container className="footers">
                    <h1 className="h1">NEWSLATTER</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            className="formControl"
                            placeholder="your@gmail.com"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            SUBSCRIBE
                        </Button>
                    </InputGroup>

                </Container>



            </div>

            <div className="footer footers">
                Copyright ©2020 Deny Designs | All Rights Reserved.
            </div>
        </>
    )
}

export default Footer
