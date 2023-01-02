import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Header.css"

function Headers() {
    return (
        <>
            {/* <nav className="navbar sticky-top navbar-lig navbar-light topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg">logout</button>
                    </div>

                </div>
            </nav> */}
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-10'>
                        <h1>header</h1>
                    </div>
                </div>

            </div>
            <Outlet />

        </>
    )
}

export default Headers
