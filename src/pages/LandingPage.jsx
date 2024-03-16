import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div>
            <Link to={`/login`} className="button is-info is-small m-6">Login</Link>
            <Link to={`/search`} className="button is-info is-small m-6">search</Link>
        </div>
    )
}

export default LandingPage