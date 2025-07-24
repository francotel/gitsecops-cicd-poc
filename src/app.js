// ⚠️ DEMO ONLY: Fuerza la carga de secretos para testing de Trivy (no usar en producción)
require('./config-demo'); 
console.log('⚠️ Se han cargado secretos de prueba desde config-demo.js');

// App principal
const express = require('express');
const app = express();

// Importa axios vulnerable (para propósitos de escaneo)
const axios = require('axios');
const axiosVersion = require('axios/package.json').version;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <h1>🔐 GitSecOps POC</h1>
    <p>Esta es una aplicación dummy para demostrar escaneo con <strong>Trivy</strong>.</p>
    <ul>
      <li>Versión de Node.js: ${process.version}</li>
      <li>Versión de Axios: ${axiosVersion}</li>
    </ul>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aplicación dummy escuchando en http://localhost:${PORT}`);
});
