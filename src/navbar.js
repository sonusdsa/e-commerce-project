import React, { useState } from "react";
import "./Navbar.css";
import { Button, Form, FormControl } from "react-bootstrap";


const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <section className="navbar-bg">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            DenyDesigns.
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        PRODUCTS
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        COLLECTIONS
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        OUR STORY
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        ART
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        WHOLESALE
                                    </a>
                                </li>

                            </ul>
                            <form class="d-flex">
                                <button class="btn  btn-style" type="submit">
                                    Sign Up
                                </button>
                                <button class="btn  btn-style btn-style-border" type="submit">
                                    Log in
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};



export default Navbar;