//rafce
import React from 'react'
import './main.css';

const Main = () => {
    return (
        <>
            <section className='home' id='home'>
                <div class="home-content">
                    <h3>Merhaba, ben</h3>
                    <h1>Habib Şako</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo mollitia quaerat ea quibusdam
                        voluptatum nihil distinctio a.</p>
                    <div class="social-media">
                        <a href="#"><i class='bx bxl-linkedin-square bx-lg'></i></a>
                        <a href="#"><i class='bx bxl-github bx-lg'></i></a>
                        <a href="#"><i class='bx bxl-gitlab bx-lg'></i></a>
                    </div>
                    <a href="#" class="btn">Özgeçmiş <i class='bx bx-down-arrow-alt bx-flashing bx-md'></i></a>
                </div>
            </section>
            <section>
                <div className="div_dark2">
                    <div className="div_parag">
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    id="parag_resume"
                                    className="col-7 "
                                    style={{ textAlign: "center" }}
                                >
                                    <h1 style={{ marginTop: "5rem", marginLeft: "4rem" }}>
                                        <b>Merhaba Ben Habib,</b>
                                    </h1>
                                    <p className="parag_1">
                                        İnönü üniversitesi 4. sınıf bilgisayar mühendisliği öğrencisiyim.
                                        Kendimi yazılım alanında geliştirmekteyim. Hırslı, hızlı öğrenen
                                        ve çalışkan bir mühendisliik öğrencisiyim. Sorumluluk sahibi,
                                        titiz ve ekip çalışmasına uyum sağlayabilen işbirlikçi bir
                                        insanım. Zorluklarla yüzleşirken ve çözerken keyif alıyorum. Her
                                        zaman kendimi geliştirmeye gayret eden ve yeni şeyler öğrenmeye
                                        istekli biriyim. Şu anki periyotta mobil uygulama ve web
                                        geliştirmeye ilgi duymaktayım. Hosting domain ve DNS yapılarının
                                        temel mantığını yanısıra orta düzeyde Wordpress bilgisine sahibim.
                                        C, Java, Html5, CSS3, Javascript, NodeJs ve ReactJS dilleri ile
                                        frontend, backend ve ilgimi çeken diğer alanlarda gelişmeye devam
                                        ediyorum.{" "}
                                    </p>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <img
                                        id="img_resume1"
                                        src="img/img/design3.jpg"
                                        alt="Remember Why You Started"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main