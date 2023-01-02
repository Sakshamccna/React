import React from 'react'

function Headers() {
    return (
        <div>
            <header>

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

                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Headers
