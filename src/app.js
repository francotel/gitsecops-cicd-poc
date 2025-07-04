// Agrega al inicio (solo para testing)
const fakeSecrets = require('./config-demo'); // Esto activará también el escaneo de imports
console.log('Demo secrets loaded'); // No usar en producción

const express = require('express');
const app = express();
const vulnerablePackage = require('axios'); // Paquete con vulnerabilidades conocidas

app.get('/', (req, res) => {
  res.send(`
    <h1>GitSecOps POC</h1>
    <p>Esta es una aplicación dummy para demostrar Trivy</p>
    <p>Versión de Node: ${process.version}</p>
    <p>Versión de Axios: ${vulnerablePackage.version}</p>
  `);
});

app.listen(3000, () => {
  console.log('App escuchando en puerto 3000');
});