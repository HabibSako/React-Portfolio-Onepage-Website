import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Office from '../image/background_img/soloturk.jpg';
// import Ball from '../image/ball.jpg';
// import Mountains from '../image/mountains.jpg';
// import SunRise from '../image/sunrise.jpg';

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
                                <h1>Habib Şako</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo <br />
                                    mollitia quaerat ea quibusdam voluptatum nihil distinctio a.
                                </p>
                                <div className="social-media">
                                    <a href="#">
                                        <i className="bx bxl-linkedin-square bx-lg" />
                                    </a>
                                    <a href="#">
                                        <i className="bx bxl-github bx-lg" />
                                    </a>
                                    <a href="#">
                                        <i className="bx bxl-gitlab bx-lg" />
                                    </a>
                                </div>
                                <a href="#" className="btn">
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
                            <h2 className='text-center my-5'> Services</h2>
                            <div className="container">
                                <div className="row" id='services_card'>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-brands fa-react"></i>
                                        <h4>{this.props.t('web')}</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-ubuntu"  style={{color:"green"}}></i>
                                        <h4>{this.props.t('linux')}</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                    <i className="fa-brands fa-java" style={{color:"red"}}></i>
                                        <h4>{this.props.t('software_development')}</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-solid fa-database"  style={{color:"darkgoldenrod"}}></i>
                                        <h4>{this.props.t('database')}</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
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

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center'>Blog</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card mb-4">
                                            <img class="card-img-top" src={Ball} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={Office} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={Mountains} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        {/* <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div> */}
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