const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Cashforce API',
    description: 'Esta é a API do desafio da Cashforce',
    version: '1.0.0',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
