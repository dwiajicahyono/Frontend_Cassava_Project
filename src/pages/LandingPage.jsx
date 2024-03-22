import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";
import { LogOut, reset } from "../features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const LandingPage = () => {

    const nama = "Dwi Aji"

    return (
        <div>
            <nav
                className="navbar is-fixed-top has-shadow"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <NavLink to="/" className="navbar-item">
                        <img src={logo} width="112" height="28" alt="logo" />
                    </NavLink>

                    <a
                        href="!#"
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <div>
                                    <Link to={`/login`} className="button is-info is-small m-6">Login</Link>
                                    <Link to={`/search`} className="button is-info is-small m-6">search</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="hero is-link is-fullheight">
                <div className="hero-body">
                    <div className="">
                        <p className="title">
                            Jaga Anak anda bersama unicef x cassava speed
                        </p>
                        <p className="subtitle">
                            Nama Saya {nama}
                        </p>
                        <button class="button is-primary">Primary</button>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default LandingPage