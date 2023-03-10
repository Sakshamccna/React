import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./sidebar.css"

function Sidebar() {

    const navigate = useNavigate();
    const usermail = JSON.stringify(localStorage.getItem('useremail'));
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/Login")

    }
    return (

        <>

            <nav id="sidebarMenu" className=" d-lg-block navbar-expand-lg navbar-light sidebar bg-white">


                <p
                    className="nav-link d-flex align-items-center center">
                    <img


                        src="hello.jpg"
                        className="rounded-circle"
                        height="85"
                        alt="Avatar"
                        loading="lazy"
                    />
                </p>

                <a
                    className="list-group-item list-group-item-action py-2 ripple"
                    aria-current="true"
                    data-mdb-toggle="collapse"
                    href="#collapseExample1"
                    aria-expanded="true"
                    aria-controls="collapseExample1"
                >
                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Side Bar</span>
                </a>

                <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                    <li className="list-group-item py-1">
                        < Link to="Home" > Home</Link >
                    </li>
                    <li className="list-group-item py-1">
                        < Link to="About" > About</Link >
                    </li>
                    <li className="list-group-item py-1">
                        < Link to="Getapi" > Users</Link >
                    </li>

                </ul>
            </nav>

            <nav className="navbar bg-dark" id='id'>
                <NavDropdown id="nav-dropdown" className="border p-2 mb-2 bg-white text-dark" title={usermail}>
                    <NavDropdown.Item onClick={handleLogout}>logout</NavDropdown.Item>
                </NavDropdown>

                {/* <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg" onClick={handleLogout}>logout</button>
                    </div>

                </div> */}

            </nav>
            <Outlet />




        </>


    )

}

export default Sidebar
