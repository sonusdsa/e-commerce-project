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
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                    <Button className="button" variant="outline-success">Search</Button>
                                </Form>

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

// const Navbar = () => {
//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Navbar</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Link</a>
//                             </li>
//                             <li class="nav-item dropdown">
//                                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a class="dropdown-item" href="#">Action</a></li>
//                                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                             </li>
//                         </ul>
//                         <form class="d-flex">
//                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

export default Navbar;