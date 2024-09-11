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
                                <h3>{this.props.t('hi')}, {this.props.t('i')}</h3>
                                <h1>Habib  <i>Ş</i>ako</h1>
                                <p>
                                    {this.props.t('computer_eng')}
                                </p>
                                <div className="social-media" id='header_icons'>
                                    {/* linkedin */}
                                    <a href="https://www.linkedin.com/in/habibsako/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    {/* github */}
                                    <a href="https://github.com/HabibSako" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github "></i>
                                    </a>
                                    {/* gitlab */}
                                    <a href="https://gitlab.com/habibsako" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-square-gitlab"></i>
                                    </a>
                                    {/* mail */}
                                    <a href="mailto:habibsako@outlook.com" >
                                        <i class="fa-solid fa-envelope"></i>
                                    </a>
                                </div>
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
                                        <p className='line-clamp10'>Web geliştirme (React JS) ile ilgileniyorum. Yaptığım web projelerde genel olarak Html, CSS, JavaScript dillerini ve bazı projelerde ek olarak React JS kütüphanesini  kullanıyorum.</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-ubuntu" style={{ color: "green" }}></i>
                                        <h4>{this.props.t('linux')}</h4>
                                        <p className='line-clamp10'>Linux temel kullanımına hakimim. Ubuntu işletim sisteminde deneyimlerim oldu. Ubuntu üzerinde flask kütüphanesini kullanarak API uygulama yazımı, public bir API'den veri çekilmesi ve uygulamanın docker üzerinden kaldırılması gibi görevleri yaptım.</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-java" style={{ color: "red" }}></i>
                                        <h4>{this.props.t('software_development')}</h4>
                                        <p className='line-clamp10'> Bugüne kadar çeşitli dillerde eğitim aldım ve çalışmlar yaptım. Değişen tek şey kullandığın dilin yazım biçimi. Bu yüzden algoritmanın mantığını öğrenmek benim önceliklerimden...</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-solid fa-database" style={{ color: "darkgoldenrod" }}></i>
                                        <h4>{this.props.t('database')}</h4>
                                        <p className='line-clamp10'>
                                            Toplamda 54 oturum ve 140 saatten oluşan bu yoğun program ile yapay zeka alanında ilerlemeyi ve başarılı olmayı hedefliyorum.</p>
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
                                <h4 className='mb-4 mx-4'>{this.props.t('software_skills')}</h4>
                                <ul className="list-unstyled mb-1 mx-4">
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Html5</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> CSS3</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> JavaScript</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> ReactJS</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Java</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Kotlin</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> PostgreSQL</li>

                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h4 className='mb-4 mx-4'>{this.props.t('personal_skills')}</h4>
                                {/* FORM */}
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 mx-5">
                                    <ul className="list-unstyled mb-1">
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('team_management')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('analytical_thinking')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('problem_solving')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('English')}</li>
                                    </ul>
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                    </div>{/* end skills */}

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center text-dark'>{this.props.t('projects')}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Design} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Veri Madenciliği Yöntemleri ile Akciğer Kanser Tespiti</h4>
                                                <p class="card-text line-clamp5">Bu projenin amacı kişinin sigara kullanımı, alkol tüketimi, yaşam kalitesi ve yaşına göre akciğer kanserine yakalanıp yakalanmadığını belirlemektir.
                                                <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/Veri-Madenciligi-ile-Kanser-Tespiti">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={BestDesign} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Açık Kaynak Yazılım Geliştirme Dersi</h4>
                                                <p class="card-text line-clamp5"> Python kütüphanelerinden olan flask ve flask-Restful kullanarak yapmış olduğum projelerdir. Local API yazmak, public API'den veri çekmek ve yazdırmak, yapılan uygulamanın docker üzerinde çalıştırılması yaptığım birkaç uygulama. 
                                                <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/Rest-API">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design2} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">DevOps Teknolojileriyle CI/CD Pipeline</h4>
                                                <p class="card-text line-clamp5"> Yazmış olduğum container-based yapıdaki kodun docker, snyk, dockerhub teknolojilerini kullanarak jenkins üzerinde CI/CD sürecinin gerçekleştirilmesidir. Projeyle ilgili detaylı döküman github repoda bulunmaktadır.
                                                <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/CI-CD-Pipeline">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design3} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">ReactJS - OnePage Kişisel Web Sitesi</h4>
                                                <p class="card-text line-clamp5">ReactJs kullanarak görmüş olduğunuz web sitesinin kaynak kodlarına github hesabımdan ulaşabilirsiniz. Site hakkındaki öneri ve değerlendirmenizi bana habibsako@outlook.com adresinden iletebilirsiniz.
                                                <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/React-Portfolio-Onepage-Website">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design4} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">K-means Algoritması ve KNN Algoritması</h4>
                                                <p class="card-text line-clamp5"> Python dilini kullanarak veri madenciliği dersi için yapmış olduğum çalışmalardır. Yakınlık olarak öklid uzaklığı kullanılmıştır. 
                                                <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/Veri-madenciligi-Data-Mining">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Wordpress} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">AntikApp-Web </h4>
                                                <p class="card-text line-clamp5">Antika ürünlerin, koleksiyon eşyalarının web sitesi üzerinden sergilenmesi, alım-satımı ve bu
                                                    ürünlerin tarihsel veya koleksiyonel değerlerinin bulunduğu web tabanlı bir uygulama projesidir.
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/AntikApp-Web">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design3} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Runner Game - Castle Run</h4>
                                                <p class="card-text line-clamp5"> Unity kullanılarak yapılmış, basit ve sade oyun projesidir. Oyunumuz şehri kuşatılan
                                                    şovalyemizin şehir surlarından
                                                    belirlenen süre içinde şehir
                                                    kapısına ulaşarak savaş
                                                    meydanına yetişmesini konu
                                                    alır.
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/HabibSako/Castle-Run---Unity">Detaylar</a></button>
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
