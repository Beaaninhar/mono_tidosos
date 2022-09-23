const express = require("express");
const routes = require("./routes");
const PORT = 4001;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
