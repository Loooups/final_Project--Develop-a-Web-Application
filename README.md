# ![Clinicify](https://user-images.githubusercontent.com/114942078/204480563-e5124f39-fdb7-42fc-ad55-66bbe6940207.png)

![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)

This application is my graduation project Upskilling - Software Developers.

The application is called Clinicify it allows the monitoring of a clinical study.

## Technologies

This application is based on : MongoDB database [https://www.mongodb.com/atlas/database], Mangoose ODM[https://mongoosejs.com/], Express.JS [https://expressjs.com/] and Node.Js [https://nodejs.org/en/] Server, React.JS [https://reactjs.org/] with Tailwind.CSS [https://tailwindcss.com/] for the web client and all http requests will be handled by axios [https://axios-http.com/docs/intro].

## Essential Features

- ✅ Create, Read clinical trials with protected routes (studies displayed with conditional colors),
- ✅ Create, Read users of the application,
- ✅ Read patients and display constants on a charts,
- ✅ Read logbook in charge for patient follow-up with protected routes.
- ✅ An authentication system with bcrypt for password-hashing[https://www.bcrypt.fr/] and Json Web Token (open industry standard RFC 7519 method for representing claims securely between two parties [https://jwt.io/].)

## Procedure

- Add .env file to backend folder with : NODE_ENV = development or production (on developement mode the server will return detailed error message), PORT, MONGO_URI, JWT_SECRET and JWT_EXPIRE,
- NPM run dev
- NPM run seed (to use some datas)
- Frontend foler
- NPM start

## Author

👤 **f.Moncef**

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
