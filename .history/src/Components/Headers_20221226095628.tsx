import React from 'react'

function Headers() {
    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <form className="form-inline">
                    <div className="input-group">

                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Headers
