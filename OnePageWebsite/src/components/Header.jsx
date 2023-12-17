import React, { Component } from 'react';
// I18N
// Resuability
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';
import { withTranslation } from 'react-i18next';

// Dark Mode
import './DarkMode/dark.css';
import DarkMode from './DarkMode/DarkMode';

// CLASS
class Header extends Component {

    // display
    static displayName = "Header"

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {

        /* JS Codes */
        const { t } = this.props;

        /* Return */
        return (
            <React.Fragment>
                {/* start Login Off Canvas Login */}
                <div className="container-fluid ">
                    <div
                        className="offcanvas offcanvas-start bg-dark text-white"
                        tabIndex={-1}
                        id="offcanvas_login"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">
                                Login
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <form>
                                <input
                                    className="form-control me-2 mb-2"
                                    type="email"
                                    placeholder="email address"
                                />
                                <input
                                    className="form-control me-2 mb-2"
                                    type="password"
                                    placeholder="password"
                                />
                                <button className="btn btn-outline-danger mt-2 me-2" type="reset">
                                    Temizle
                                </button>
                                <button className="btn btn-outline-primary mt-2" type="submit">
                                    Giriş Yap
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end  Login Off Canvas Login */}

                {/* start Register Off Canvas Register */}
                <div className="container-fluid ">
                    <div
                        className="offcanvas offcanvas-end bg-dark text-white"
                        tabIndex={-1}
                        id="offcanvas_register"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">
                                Register
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <form>
                                <input
                                    className="form-control me-2 mb-2"
                                    type="uname"
                                    id="uname"
                                    name="uname"
                                    title="username"
                                    placeholder="Username"
                                />

                                <input
                                    className="form-control me-2 mb-2"
                                    type="usurname"
                                    id="uname"
                                    name="uname"
                                    title="username"
                                    placeholder="Surname"
                                />

                                <input
                                    className="form-control me-2 mb-2"
                                    type="email"
                                    id="uemail"
                                    name="uemail"
                                    title="email"
                                    placeholder="email address"
                                />
                                <input
                                    className="form-control me-2 mb-2"
                                    type="password"
                                    id="upassword"
                                    name="upassword"
                                    title="password"
                                    placeholder="password"
                                />
                                <button className="btn btn-outline-danger mt-2 me-2" type="reset">
                                    Temizle
                                </button>
                                <button className="btn btn-outline-primary mt-2" type="submit">
                                    Giriş Yap
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end Register Off Canvas Login */}


                {/* start Navbar */}
                <nav
                    id="navbar_second_id"
                    className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a
                            className="navbar-brand"
                            href={this.props.url}>
                            <i class="fa-regular fa-paper-plane"></i>
                            
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">
                                        {this.props.t('home_page')} <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services_id">
                                        {this.props.t('services')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog_id">
                                        {this.props.t('blog')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about_id">
                                        {this.props.t('about')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact_id">
                                        {this.props.t('contact')}
                                    </a>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t('languages')}
                                    </a>
                                     <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <OtherLanguageReusability />
                                         <a className="dropdown-item" href="#">
                                            Action 1
                                        </a> 
                                    </div> 
                                </li> */}
                            </ul>

                            {/* Dark Mode */}
                            <ul className="navbar-nav ms-auto me-3 mt-2 mt-lg-0">
                                <li className="nav-item mt-2">
                                    {/* dark mode */}
                                    <OtherLanguageReusability />
                                </li>
                                <li className="nav-item">
                                    {/* dark mode */}
                                    <DarkMode />
                                </li>
                            </ul>


                            <ul id="navbar_first_right">
                                <li>
                                    <a href="#"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvas_login"
                                        aria-controls="offcanvasNavbar" >
                                        <i className="fa-solid fa-key"></i>
                                    </a>

                                    <a href="#"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvas_register"
                                        aria-controls="offcanvasNavbar" >
                                        <i className="fa-solid fa-lock mx-3"></i>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end Navbar */}
            </React.Fragment>
        ); //end return
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Header)


// Props Default Variables
Header.defaultProps = {
    url: "http://localhost:3000"
}

// Props Default Value Validation
// Header.propTypes = {
//     url: PropTypes.string.isRequired,
// }



