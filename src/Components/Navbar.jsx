import React from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineSportsHandball, MdBusinessCenter, MdOutlineCoPresent   } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

// Navbar component with category selection functionality
const Navbar = ({ setCategory }) => {
  return (
    // Navbar structure with Bootstrap styling
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Brand logo */}
        <a className="navbar-brand" href="#">
          {/* Badge with hover effect */}
          <span
            className="badge bg-light text-dark mx-5 py-2 px-4"
            style={{
              borderRadius: '8px',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              display: 'inline-block',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.transform = '';
            }}
          >
            Buzz Feed
          </span>
        </a>
        {/* Navbar toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
          <ul className="navbar-nav navlinks mx-5">
            {/* Technology category */}
            <li className="nav-item">
              <div className="nav-link mx-4 text-center" onClick={() => setCategory("Technology")}><GrTechnology />
                Technology
              </div>
            </li>
            {/* Business category */}
            <li className="nav-item">
              <div className="nav-link mx-4 text-center" onClick={() => setCategory("Business")}><MdBusinessCenter />
                Business
              </div>
            </li>
            {/* Health category */}
            <li className="nav-item">
              <div className="nav-link mx-4 text-center" onClick={() => setCategory("Health")}> <MdHealthAndSafety />
                Health
              </div>
            </li>
            {/* Sports category */}
            <li className="nav-item">
              <div className="nav-link mx-4 text-center" onClick={() => setCategory("Sports")}> <MdOutlineSportsHandball />
                Sports
              </div>
            </li>
            {/* Entertainment category */}
            <li className="nav-item">
              <div className="nav-link mx-4 text-center" onClick={() => setCategory("Entertainment")}><MdOutlineCoPresent />
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Exporting the Navbar component
export default Navbar;
