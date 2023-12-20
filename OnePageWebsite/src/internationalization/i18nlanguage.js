import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useState } from "react";

i18n.use(initReactI18next).init({
    resources: {
        en:
        {
            translations: {
                'home_page': 'Home Page',
                'blog': 'Projects',
                'about': 'About',
                'contact': 'Contact',
                'search': 'Search',
                'languages': 'Languages',
                'services': 'Services',
                'social_media': 'Social Media',
                'username': 'Name',
                'email_address': 'Email Address',
                'subject': 'Subject',
                'content': 'Content',
                'web': 'Web Design',
                'linux': 'Linux',
                'software_development': 'Software Development',
                'database': 'Database',
                'about_paragraph': 'I am a student in the 4th year of computer engineering at Inonu University. I am developing myself in the field of software. I am an ambitious, a fast learner and a hard working engineer. I can adapt to teamwork and I am a responsible, meticulous and cooperative person. I enjoy facing and solving challenges and I am always eager to improve myself and willing to learn new things. I aminterested in Android (Kotlin) and webdevelopment(React JS) at the moment. I know the basic logic of hosting domain and DNS structures.',
                'about_me': 'About Me',
                'skills': 'Skills',
                'projects': 'Projects',
                'education': 'Education',
                'school_1': 'Ergun Oner Mehmet Oner High School',
                'school_2': 'Malatya Beydagı High School',
                'school_3': 'Inonu Univercity - Computer Eng. University',
                'software_skills': 'Software Skills',
                'personal_skills': 'Personal Skills',
                'team_management': 'Team Management',
                'analytical_thinking': 'Analytical Thinking',
                'problem_solving': 'Problem Solving',
                'English': 'b1-b2 Level English',
                'login': 'Login',
                'register': 'Register',
                'reset': 'Reset',
                'surname': 'Surname',
                'password': 'Password',
                'send': 'Send',
                'register_list': "Register List",
                'register_update': "Register Update",
                'register_view': "Register View",
                'hi': 'Hi',
                'i': 'I am',
                'computer_eng': 'Computer Engineering',
                'cv': 'CV',
            }
        },
        tr:
        {
            translations: {
                'home_page': 'Anasayfa',
                'blog': 'Projeler',
                'about': 'Hakkımda',
                'contact': 'İletişim',
                'search': 'Arama',
                'languages': 'Diller',
                'services': 'Hizmetler',
                'social_media': 'Sosyal Medya',
                'username': 'Adınız',
                'email_address': 'Email',
                'subject': 'Konu',
                'content': 'İçerik',
                'web': 'Web Tasarım',
                'linux': 'Linux',
                'software_development': 'Yazılım Geliştirme',
                'database': 'Veritabanı',
                'about_paragraph': 'İnönü üniversitesi 4. sınıf bilgisayar mühendisliği öğrencisiyim. Kendimi yazılım alanında geliştirmekteyim. Hırslı, hızlı öğrenen ve çalışkan bir mühendisim. Sorumluluk sahibi, titiz ve ekip çalışmasına uyum sağlayabilen işbirlikçi bir insanım. Zorluklarla yüzleşirken ve çözerken keyif alıyorum. Her zaman kendimi geliştirmeye gayret eden ve yeni şeyler öğrenmeye istekli biriyim. Şu anki periyotta android(Kotlin) ve web geliştirmeye ilgi duymaktayım. Hosting domain ve DNS yapılarının temel mantığını biliyorum. ',
                'about_me': 'Hakkımda',
                'skills': 'Yetenekler',
                'projects': 'Projeler',
                'education': 'Eğitim',
                'school_1': 'Ergün Öner Mehmet Öner Anadolu Lisesi',
                'school_2': 'Malatya Beydağı Anadolu Lisesi',
                'school_3': 'İnönü Üniversitesi - Bilgisayar Mühendisliği',
                'software_skills': 'Yazılım Becerileri',
                'personal_skills': 'Bireysel Beceriler',
                'team_management': 'Ekip Yönetimi',
                'analytical_thinking': 'Analitik Düşünme',
                'problem_solving': 'Sorun Çözme',
                'English': 'b1-b2 Seviye İngilizce',
                'login': 'Giriş',
                'register': 'Kayıt Ol',
                'reset': 'Temizle',
                'surname': 'Soyadınız',
                'password': 'Şifre',
                'send': 'Gönder',
                'register_list': "Kayıt Listesi",
                'register_update': "Kayıt Güncelle",
                'register_view': "Kayıtları Göster",
                'hi': 'Merhaba',
                'i': 'Ben',
                'computer_eng': 'Bilgisayar Mühendisliği',
                'cv': 'Özgeçmiş',
            }
        }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
        wait: true
    }
});
export default i18n;