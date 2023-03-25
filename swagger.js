const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Final Project API',
    description: 'TravelWish API'
  },
  host: 'https://team-15-project.onrender.com',
  //host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
