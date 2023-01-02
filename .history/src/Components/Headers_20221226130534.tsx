import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Header.css"

function Headers() {
    return (
        <>
            {/* <nav className="navbar sticky-top bg-light topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg">logout</button>
                    </div>

                </div>
            </nav> */}
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-10'>
                        <div className="sticky-top  topnav-right">
                            <div className="d-flex justify-content-center mx-4 ">
                                <button type="button" className="btn btn-light btn-lg">logout</button>
                            </div>

                        </div>
                    </div>
                </div> */}

            {/* </div> */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid topnav-right">



                    <div className="d-flex justify-content-center ">
                        <button type="button" className="btn btn-primary btn-lg " >logout</button>
                    </div>

                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Headers
