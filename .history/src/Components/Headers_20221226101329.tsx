import React from 'react'
import "./Header.css"

function Headers() {
    return (
        <>
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <div className="topnav-right">
                        <a href="#search">Search</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Headers
