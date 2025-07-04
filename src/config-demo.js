// ESTO ES SOLO PARA DEMOSTRAR EL ESCANEO - NO USAR EN PRODUCCIÓN
const secrets = {
  aws: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
  },
  database: {
    password: 'postgres://user:supersecretpassword@localhost:5432/mydb'
  },
  apiKeys: {
    stripe: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
    github: 'ghp_AbCdEfGhIjKlMnOpQrStUvWxYz12345678'
  }
};

module.exports = secrets;