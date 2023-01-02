import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Header.css"

function Headers() {
    return (
        <>
            <nav className="navbar sticky-top navbar-lig navbar-light topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg">logout</button>
                    </div>

                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Headers
