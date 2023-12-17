import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Design from '../image/img/design.jpg';
import Design2 from '../image/img/design2.jpg';
import Design3 from '../image/img/design3.jpg';
import Design4 from '../image/img/design4.jpg';
import Wordpress from '../image/img/wordpress.jpg';
import BestDesign from '../image/img/bestdesign.jpg';

// CLASS
class Main extends Component {

    // display
    static displayName = "Main"

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

    // RENDER
    render() {
        let data = (this.props.t('about'))

        return (
            <React.Fragment >
                {/* start codes Header  */}
                <header id="header">
                    <div className="jumbotron text-white">
                        <div className="container">
                            <div className="home-content">
                                <h3>Merhaba, ben</h3>
                                <h1>Habib  <i>Ş</i>ako</h1>
                                <p>
                                    Bilgisayar Mühendisliği 4/4
                                </p>
                                <div className="social-media" id='header_icons'>
                                    {/* linkedin */}
                                    <a href="https://www.linkedin.com/in/habibsako/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    {/* github */}
                                    <a href="https://github.com/HabibSako">
                                        <i className="fa-brands fa-github "></i>
                                    </a>
                                    {/* gitlab */}
                                    <a href="https://gitlab.com/habibsako">
                                        <i className="fa-brands fa-square-gitlab"></i>
                                    </a>
                                    {/* mail */}
                                    <a href="mailto:habibsako@outlook.com">
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </a>

                                </div>
                                <a href="https://dosya.co/o85nmpahgjw6/cv.pdf.html" className="btn_cv">
                                    Özgeçmiş
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="home" id="home">

                </section>
                {/* ends codes Header  */}

                {/* start codes Main  */}
                <main>
                    {/* start services_id */}
                    <section id="services_id">
                        <div className="icon_service">
                            <h2 className='text-center my-5'> {this.props.t('services')}</h2>
                            <div className="container">
                                <div className="row" id='services_card'>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-brands fa-react"></i>
                                        <h4>{this.props.t('web')}</h4>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-ubuntu" style={{ color: "green" }}></i>
                                        <h4>{this.props.t('linux')}</h4>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-java" style={{ color: "red" }}></i>
                                        <h4>{this.props.t('software_development')}</h4>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-solid fa-database" style={{ color: "darkgoldenrod" }}></i>
                                        <h4>{this.props.t('database')}</h4>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end services */}

                    {/* start about_id */}
                    <section id="about_id">
                        <div className="about_service">
                            <h2 className='text-center text-white'>{this.props.t('about_me')}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 pt-5">
                                        <p className='text-white'>{this.props.t('about_paragraph')}</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}

                    {/* start education */}
                    <section id="education_id">
                        <div className="education">
                            <h2 className='text-center my-5'> {this.props.t('education')}</h2>
                            <div className="container">
                                <div className="row" id='education_card'>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                        <h4>{this.props.t('school_1')}</h4>
                                        <h6>
                                            <b>
                                                <i>
                                                    2016-2018
                                                    <hr />
                                                </i>
                                            </b>
                                        </h6>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                                    <h4>{this.props.t('school_2')}</h4>
                                        <h6>
                                            <b>
                                                <i>
                                                    2018-2020
                                                    <hr />
                                                </i>
                                            </b>
                                        </h6>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                    <h4>{this.props.t('school_3')}</h4>
                                        <h6>
                                            <b>
                                                <i>
                                                    2020-
                                                    <hr />
                                                </i>
                                            </b>
                                        </h6>
                                        <p className='line-clamp4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end education */}
                    </section>
                    {/* end education */}

                    {/* start skills */}
                    {/*Grid row*/}
                    <div className="container mt-4" id='skills_div'>
                    <h2 className='text-center my-5'> {this.props.t('skills')}</h2>
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 >{this.props.t('software_skills')}</h5>
                                <ul className="list-unstyled mb-0">
                                <li><i class="fa-solid fa-circle-right"></i>Html5</li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 >{this.props.t('personal_skills')}</h5>
                                {/* FORM */}
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                   
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                    </div>
                    
                    {/* end skills */}

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center'>{this.props.t('projects')}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Design} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={BestDesign} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5, CSS3</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design2} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5,CSS, JS</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design3} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">ReactJS</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design4} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Python</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Wordpress} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Kotlin</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design3} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">C</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design2} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Java</h4>
                                                <p class="card-text line-clamp5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>



                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end blog */}

                    {/* start backToTop */}
                    <a href="#header" id="backToTop" className="btn btn-outline-primary">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>

                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);