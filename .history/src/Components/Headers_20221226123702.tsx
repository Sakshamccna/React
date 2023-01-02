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
                <div className="container-fluid">


                    <ul className="navbar-nav ms-auto d-flex flex-row">



                        <div className="input-group">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control" />

                            </div>
                            <button type="button" className="btn btn-primary">
                                <i className="fa-light fa-magnifying-glass-plus"></i>
                            </button>
                        </div>
                    </ul>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" >logout</button>
                    </div>

                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Headers
