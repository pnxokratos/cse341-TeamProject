const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const { auth /*,requiresAuth*/ } = require('express-openid-connect');

const port = process.env.PORT || 8080;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })

  // auth router attaches /login, /logout, and /callback routes to the baseURL
  .use(auth(config))
  .use('/', require('./routes'));

/* */

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

mongodb.initDb((err, mongodb, next) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});