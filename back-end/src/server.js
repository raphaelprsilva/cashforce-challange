require('dotenv').config();
const app = require('./app');

const PORT = process.env.MYSQLPORT || 3001;

app.listen(PORT, () => {
  console.info(`Escutando na porta ${PORT}`);
});
