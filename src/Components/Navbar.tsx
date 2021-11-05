import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <form className="form-inline" action="/action_page.php">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                </form>
              <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;