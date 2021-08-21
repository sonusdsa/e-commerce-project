import React from 'react';
import { Carousel } from "react-bootstrap";
import "./ImageSlider.css";

import Image1 from './Images/i1.jpg';
import Image2 from './Images/i2.jpg';
import Image3 from './Images/i3.jpg';

function ImageSlider() {
    return (
        <div className="image-slider">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        height="640px"

                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="640px"

                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="640px"

                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider;
