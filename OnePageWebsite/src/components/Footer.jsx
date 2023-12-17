import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// CLASS
class Footer extends Component {

    // display
    static displayName = "Footer"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
        //BIND
    }

    // CDM

    // Function
    firstNewDate = () => {
        return "2023"
    }

    secondNewDate() {
        return ` ${new Date().getFullYear()} `
    }

    // RENDER
    render() {
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className="bg-dark text-white text-md-start" id="contact_id" >
                    {/* Grid container */}
                    <div className="container p-4" id='footer'>
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 className="text-uppercase mb-5">{this.props.t('social_media')}</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        {/* Linkedin */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1 mt-1"
                                            style={{ backgroundColor: "#0082ca" }}
                                            href="https://www.linkedin.com/in/habibsako/"
                                            role="button"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/habibsako/">
                                            linkedin.com/in/habibsako
                                        </a>
                                    </li>
                                    <li>
                                        {/* Github */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#333333" }}
                                            href="https://github.com/HabibSako"
                                            role="button"
                                        >
                                            <i className="fab fa-github" />
                                        </a>
                                        <a href="https://github.com/HabibSako">
                                            github.com/HabibSako
                                        </a>
                                    </li>

                                    <li>
                                        {/* Gitlab */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#dd4b39" }}
                                            href="https://gitlab.com/habibsako"
                                            role="button"
                                        >
                                            <i className="fab fa-gitlab" />
                                        </a>
                                        <a href="https://gitlab.com/habibsako">
                                            gitlab.com/habibsako
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 className="text-uppercase">{this.props.t('contact')}</h5>
                                {/* FORM */}
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                    <form action="#!" method="post" autoComplete='on'>
                                        {/* Username */}
                                        <div className="form-group mt-4 mb-4">
                                            <label htmlFor="uname">{this.props.t('username')}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="uname"
                                                placeholder="kullanıcı adınız"
                                                title='kullanıcı adınız'
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="uemail">{this.props.t('email_address')}</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="uemail"
                                                name="uemail"
                                                placeholder="Email adresiniz"
                                                title="Email adresiniz"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="usubject">{this.props.t('subject')}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="usubject"
                                                name="usubject"
                                                placeholder="Konu"
                                                title="Email Konusu"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="exampleFormControlTextarea1">{this.props.t('content')}</label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>

                                        <div className="form-group mt-4 mb-4">
                                            <input type="reset" id="reset" name="reset" value="Temizle" className="btn btn-danger me-3" />
                                            <button type="submit" id="submit" name="submit" className="btn btn-primary">Gönder </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </div>
                    {/* Grid container */}
                    {/* MAP */}
                    <div className="">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    className="gmap_iframe"
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=malatya&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                />
                                <a href="https://embed-googlemap.com">embed google map</a>
                            </div>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".mapouter{position:relative;text-align:center;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}"
                                }}
                            />
                        </div>

                    </div>
                    {/* Copyright */}
                    <div
                        className="text-center p-5 mb-0"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                        © {this.firstNewDate()} - {this.secondNewDate()} Copyright :
                        <a className="text-body" href="#">
                        </a>
                        Habib Şako
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}




            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER (withTransaction)
export default withTranslation()(Footer);