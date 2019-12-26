import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="../pages/index.js">
        ManGO!
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="../pages/index.js">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/listpage.js">
              Ônibus
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/mappage.js">
              Mapa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="../pages/registerpage.js">
              Cadastro
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
