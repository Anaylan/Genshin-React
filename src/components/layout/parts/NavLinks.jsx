import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <BrowserRouter>
      <ul className="navbar-nav mr-auto mb-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Главная
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/guides" className="nav-link">
            Гайды
          </Link>
        </li>
        <li className="nav-item">
          <NavDropdown className="align-items-center" title="База знаний">
            <NavDropdown.Item>
              <Link to={"/wiki/weapons"} className="nav-link">
                Оружие
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/wiki/characters"} className="nav-link">
                Персонажи
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/wiki/artifacts"} className="nav-link">
                Артефакты
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            О нас
          </Link>
        </li>
      </ul>
    </BrowserRouter>
  );
};

export default NavLinks;
