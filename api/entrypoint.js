require('@babel/register')

const app = require('./app/app').default

const PORT = 4001;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));