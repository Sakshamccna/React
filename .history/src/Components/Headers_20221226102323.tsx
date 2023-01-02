import React from 'react'
import "./Header.css"

function Headers() {
    return (
        <>
            <nav className="navbar sticky-top navbar-lig bg-dark topnav-right">
                <div className=" topnav-right">
                    <div className="topnav-right">
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-light btn-lg">logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Headers
