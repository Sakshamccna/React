import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Loginheader.css"

function Loginheader() {
    return (
        <>
            <nav className="navbar sticky-top  bg-dark topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg mx-2">SignUp</button><br />


                        <button type="button" className="btn btn-light btn-lg">login</button>
                    </div>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Loginheader
