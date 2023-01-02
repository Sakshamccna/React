import React from 'react'

function Headers() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Headers
