import React from 'react';
import "./Products.css";
import { CardGroup, Card } from "react-bootstrap";

import Bed from './Images/bed.jpg';
import Blanket from './Images/blanket.jpg';
import Pillow from './Images/pillow1.jpg';
import Wall from './Images/wall.jpg';
import Fur from './Images/FUR.jpg';
import Bath from './Images/bath1.jpg';



function Products() {
    return (
        <>



            <div className="products">
                <div className="product">
                    <h1 className="main_h1">PRODUCTS</h1>
                    <CardGroup className="cardGroup">
                        <Card className="card">
                            <Card.Img variant="top" src={Bed} />
                            <Card.Body className="card_body">
                                <Card.Title className="title">Bed</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src={Blanket} />
                            <Card.Body>
                                <Card.Title className="title">Blanket</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src={Pillow} />
                            <Card.Body>
                                <Card.Title className="title">Pillow</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                    </CardGroup>

                    <CardGroup className="cardGroup2">
                        <Card className="card">
                            <Card.Img variant="top" src={Wall} />
                            <Card.Body>
                                <Card.Title className="title">Wall</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src={Fur} />
                            <Card.Body>
                                <Card.Title className="title">Furniture</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src={Bath} />
                            <Card.Body>
                                <Card.Title className="title">Bath</Card.Title>
                                <Card.Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                    </CardGroup>

                </div>



            </div>

        </>
    );
};

export default Products;
