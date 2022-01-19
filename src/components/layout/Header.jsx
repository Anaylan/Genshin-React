import React, {useState} from "react";
import {CloseButton, Navbar, Offcanvas,} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FaAlignJustify} from "react-icons/fa";
import NavLinks from "./parts/NavLinks";
import {NavLink} from "react-router-dom";


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <header className="position-sticky fixed-top bg-white border" id="header">
                <Navbar id="main_bar" className={'d-lg-block d-none'}>
                    <div className="container justify-content-between align-items-center">
                        <div>
                            <div className="navbar-brand align-items-center d-flex">
                                <NavLink className={'text-black'} to={'/'}>
                                    Genshin Easy
                                </NavLink>
                            </div>
                        </div>
                        <div id="navbarCollapse">
                            <NavLinks/>
                        </div>
                    </div>
                </Navbar>
                <Navbar id="mobile_bar" className={'d-lg-none d-block'}>
                    <div className="container-fluid justify-content-between align-items-center">
                        <div>
                            <div className="navbar-brand align-items-center d-flex">
                                <NavLink className={'text-black'} to={'/'}>
                                    Genshin Easy
                                </NavLink>
                            </div>
                        </div>
                        <Button
                            variant={"light"}
                            className="border-1 border-dark bg-white"
                            onClick={handleShow}
                        >
                            <FaAlignJustify/>
                        </Button>
                        <Offcanvas placement={"end"} show={show}>
                            <Offcanvas.Header>
                                <Offcanvas.Title>Genshin Easy</Offcanvas.Title>
                                <CloseButton onClick={handleClose}/>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <NavLinks/>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Navbar>
            </header>
        </React.Fragment>
    );
}

export default Header;
