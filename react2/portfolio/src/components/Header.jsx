import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md ">
                <div className="header">
                    {/* icon ve başlık ekleme */}
                    <a className="navbar-brand" href="#">
                        <h2 id='navbar-icon'><i class='bx bxs-moon bx-spin bx-md' ></i><b> Habib Şako</b></h2>
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
                                <a className="nav-link"  href="#">
                                    Anasayfa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Hakkımda
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Özgeçmiş
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Projeler
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    İletişim
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dil
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">
                                        Türkçe
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        English
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;