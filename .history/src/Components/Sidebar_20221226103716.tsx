import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
    return (
        <div>
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
                        < Link to="/Home" > Home</Link >
                    </li>
                    <li className="list-group-item py-1">
                        < Link to="/About" > About</Link >
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Sidebar
