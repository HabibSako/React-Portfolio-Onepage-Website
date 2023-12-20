
# React Frontend Kursu Kişisel Web Sayfası

Bu react projesi basit bir one page web sitesidir. İletişim bilgilerinin bulunduğu, CV
niteliğinde kısaca kişinin tanıtımını yapmaktadır.
#
![Uygulama Ekran Görüntüsü](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
#
## Gereksinim ve Teknolojiler
- Editör (Visual Studio Code)
- Responsive dizayn
- Html5
- CSS3
- Javascript
- Bootstrap5
- React Js
- Git
- Gitlab, Github, Bitbucket vb.
- Rest Client (Postman)
## Uygulama Özellikleri

- One page sayfa yapısı
- Login / Register
- I18N özelliği
- Axios kütüphanesi
- Bootstrap5
- FontAwesome 
- Google Font (Poppins)
- ScrollSpy


  
## Public Api

```
Listeleme
GET
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register

Bulma
GET
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/2

Oluşturma
POST 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register
{
    "name": "name 444",
    "surname": "surname 444",
    "email": "email 444",
    "password": "password 444",
    "systemCreatedDate": 1702553267
}

curl --location 'https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register' \
--header 'Content-Type: application/json' \
--data '{
    "name": "name 444",
    "surname": "surname 444",
    "email": "email 444",
    "password": "password 444",
    "systemCreatedDate": 1702553267
}'

Silme 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/1
curl --location --request DELETE 'https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register/1'

Yerleştirme(put) 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/6
 {
        "name": "name 444",
        "surname": "surname 444",
        "email": "email 444",
        "password": "password 444",
        "systemCreatedDate": 1702553267
}

curl --location --request PUT 'https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/6' \
--header 'Content-Type: application/json' \
--data ' {
        "name": "name 444",
        "surname": "surname 444",
        "email": "email 444",
        "password": "password 444",
        "systemCreatedDate": 1702553267
}'
```


  
## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
#
# Nasıl Kurulur?
#
## Git
```bash
git init
git add .
git commit -m "Commit message in quotes"
```
## React Kurulumu ve Gerekli Kütüphanelerin İndirilmesi
```bash
npx create-react-app projectName
cd projectName

npm install axios --save
npm install react-router-dom --save 
npm install i18next --save
npm i react-i18next --save

npm start
```
  
## Yazar ve Teşekkür
- Yazar : [@HabibSako](https://github.com/HabibSako/)
- [@hamitmizrak](https://github.com/hamitmizrak/) ve [@BTKAkademi](https://twitter.com/BTKAkademi)'ye katkıları ve çabaları için teşekkür ederim.

 <!-- English -->

 # React Frontend Course Personal Web Page

This react project is a simple one page website. It contains contact information, CV
briefly introduces the person.
#
![Application Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
#
## Requirements and Technologies
- Editor (Visual Studio Code)
- Responsive design
- Html5
- CSS3
- Javascript
- Bootstrap5
- React Js
- Git
- Gitlab, Github, Bitbucket etc.
- Rest Client (Postman)
## Application Features

- One page page structure
- Login / Register
- I18N feature
- Axios library
- Bootstrap5
- FontAwesome 
- Google Font (Poppins)
- ScrollSpy

  
## Public Api
```
List
GET
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register

Find 
GET
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/2

Create 
POST 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register
{
    "name": "name 444",
    "surname": "surname 444",
    "email": "email 444",
    "password": "password 444",
    "systemCreatedDate": 1702553267
}

curl --location 'https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register' \
--header 'Content-Type: application/json' \
--data '{
    "name": "name 444",
    "surname": "surname 444",
    "email": "email 444",
    "password": "password 444",
    "systemCreatedDate": 1702553267
}'

DELETE 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/1
curl --location --request DELETE 'https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register/1'

PUT 
https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/6
 {
        "name": "name 444",
        "surname": "surname 444",
        "email": "email 444",
        "password": "password 444",
        "systemCreatedDate": 1702553267
}

curl --location --request PUT 'https://657ae489394ca9e4af12fa6f.mockapi.io/api/v1/blog/register/6' \
--header 'Content-Type: application/json' \
--data ' {
        "name": "name 444",
        "surname": "surname 444",
        "email": "email 444",
        "password": "password 444",
        "systemCreatedDate": 1702553267
}'
```



  
## Screenshots

![Application Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## How to Install?

### Git

```
bashgit init
git add .
git commit -m "Commit message in quotes"

```
## React Installation and Downloading Required Libraries
```
bashnpx create-react-app projectName
cd projectName

npm install axios --savenpm install react-router-dom --save 
npm install i18next --savenpm i react-i18next --save

npm start
``` 


## Author and Acknowledgments
- Author : [@HabibSako](https://github.com/HabibSako/)
- I would like to thank [@hamitmizrak](https://github.com/hamitmizrak/) and [@BTKAkademi](https://twitter.com/BTKAkademi) for their contributions and efforts.  


