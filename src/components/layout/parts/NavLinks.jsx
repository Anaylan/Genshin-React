import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
          <NavDropdown className="align-items-center" title="База знаний">
            <NavDropdown.Item>
              <NavLink to={"/wiki/weapons"} className="nav-link">
                Оружие
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={"/wiki/characters"} className="nav-link">
                Персонажи
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={"/wiki/artifacts"} className="nav-link">
                Артефакты
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
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
