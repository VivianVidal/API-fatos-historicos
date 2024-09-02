import express from 'express';
import { buscaFatoPorAno, validaAno } from '../src/services/fatosService.js';

const app = express();

app.get('/', (req, res) => {
    try {
        const ano = req.query.ano;
        if (validaAno(ano)) {
            const buscar = buscaFatoPorAno(ano);
            if (buscar == null || buscar == undefined) {
                res.status(404).json({ erro: 'Nenhum fato histórico cadastrado para esse ano' })
            } else {
                res.json(buscar);
            }
        } else {
            res.status(400).json({ erro: 'Ano inválido' })
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        res.status(500).json({ error: 'Erro interno' })
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
