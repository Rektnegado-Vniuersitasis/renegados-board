import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid mx-3">
      <a className="navbar-brand" href="https://github.com/Rektnegado-Vniuersitasis">
      <img src="https://avatars.githubusercontent.com/u/84147037?s=400&u=5912745e9b525d60364a315a612dc41a31384d55&v=4" alt="" width="60" height="60" className="d-inline-block" />
      <span className="pt-2">Renegados-Board</span>
      </a>
      <form className="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
)

export default Navbar;
