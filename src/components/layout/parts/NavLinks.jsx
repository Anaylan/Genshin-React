import React from "react";
import {Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto mb-0">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">
                    Главная
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/guides" className="nav-link">
                    Гайды
                </NavLink>
            </li>
            <li className="nav-item">
                <Dropdown>
                    <Dropdown.Toggle variant={'link'} className={'nav-link align-items-center'}>База
                        знаний</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <NavLink to={"/wiki/weapons"} className={'text-black dropdown-item'}>
                            Оружие
                        </NavLink>
                        <NavLink to={"/wiki/characters"} className="text-black dropdown-item">
                            Персонажи
                        </NavLink>
                        <NavLink to={"/wiki/artifacts"} className="text-black dropdown-item">
                            Артефакты
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                    О нас
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
