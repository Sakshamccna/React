import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Header.css"

function Headers() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/Login")

    }
    return (
        <>
            <nav className="navbar  bg-dark topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg" onClick={handleLogout}>logout</button>
                    </div>

                </div>
            </nav>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-10'>
                        <div className="sticky-top  topnav-right">
                            <div className="d-flex justify-content-center mx-4 ">
                                <button type="button" className="btn btn-light btn-lg">logout</button>
                            </div>sticky-top

                        </div>
                    </div>
                </div> */}

            {/* </div> */}

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="topnav-right">



                    <div className="d-flex justify-content-center ">
                        <button type="button" className="btn btn-primary btn-lg " >logout</button>
                    </div>

                </div>
            </nav> */}
            <Outlet />

        </>
    )
}

export default Headers
