import express from 'express';
import { buscaFatoPorAno } from '../src/services/fatosService.js';

const app = express();

app.get('/', (req, res) => {
    const ano = req.query.ano;
    const buscar = buscaFatoPorAno(ano);
    res.json(buscar);
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
