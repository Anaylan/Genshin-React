import React, {useState} from 'react';
import {CloseButton, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { BsJustify } from 'react-icons/bs';
import {FaAlignJustify} from "react-icons/fa";

{/*Настроить Route*/
}

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <header className="position-sticky fixed-top bg-white shadow" id="header">
                <Navbar id='main_bar'>
                    <div className='container justify-content-between align-items-center'>
                        <div>
                            <div className='navbar-brand align-items-center d-flex'>
                                Genshin Easy
                            </div>
                        </div>
                        <div id='navbarCollapse'>
                            <ul className='navbar-nav mr-auto mb-0'>
                                <li className='nav-item'>
                                    <Nav.Link>
                                        Главная
                                    </Nav.Link>
                                </li>
                                <li className='nav-item'>
                                    <Nav.Link>
                                        Персонажи
                                    </Nav.Link>
                                </li>
                                <li className='nav-item'>
                                    <NavDropdown className='align-items-center' title='База знаний'>
                                        <NavDropdown.Item>
                                            Оружие
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Персонажи
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Артефакты
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className='nav-item'>
                                    <Nav.Link>
                                        О нас
                                    </Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
                <Navbar id='mobile_bar'>
                    <div className='container-fluid justify-content-between align-items-center'>
                        <div>
                            <div className='navbar-brand align-items-center d-flex'>
                                Genshin Easy
                            </div>
                        </div>
                        <Button variant={"light"} className='border-1 border-dark bg-white' onClick={handleShow}>
                            <FaAlignJustify/>
                        </Button>
                        <Offcanvas placement={"end"} show={show}>
                            <Offcanvas.Header>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                <CloseButton onClick={handleClose}/>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className='navbar-nav mr-auto mb-0'>
                                    <li className='nav-item'>
                                        <Nav.Link>
                                            Главная
                                        </Nav.Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Nav.Link>
                                            Персонажи
                                        </Nav.Link>
                                    </li>
                                    <li className='nav-item'>
                                        <NavDropdown className='align-items-center' title='База знаний'>
                                            <NavDropdown.Item>
                                                Оружие
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                Персонажи
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                Артефакты
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li className='nav-item'>
                                        <Nav.Link>
                                            О нас
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Navbar>
            </header>
        </React.Fragment>);

}

export default Header;