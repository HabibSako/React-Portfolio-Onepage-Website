// rcc
// rfc

import React, { Component } from 'react';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

// Header, Main, Footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Portfolio from './components/portfolio/Portfolio';

// CLASS
class RouterBlog extends Component {
    render() {
        return (
            // dark mode: App 
            <div className="App">

                {/* HEADER */}
                <Header logo="fa-brands fa-salesforce" />

                {/* ROUTING */}
                {/* dark mode:App-header */}
                <div className='container mt-5 App-header'>
                    <Routes>

                        {/* index and root path */}
                        <Route path={"/"} element={<Main />} />
                        <Route path={"/index"} element={<Main />} />

                        {/* Blog */}
                        <Route path={"/react/portfolio"} element={<Portfolio />} />
 
                        {/*OTHER PATH*/}
                        {/* Bad Request */}
                        <Route path={"*"} element={<Navigate to="/" />} />
                    </Routes>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        );// end return 
    }// end render 
}// end class 

// EXPORT 
// Wrapper Higher ORder Component (i18n)
export default withTranslation()(RouterBlog);