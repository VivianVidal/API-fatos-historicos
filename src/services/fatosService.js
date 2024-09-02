import fatosHistoricos from "../../src/models/fatos.js";

function validaAno(ano) {
    if (isNaN(ano)) {
        return false;
    } else {
        if (ano >= 1920 && ano <= 2023) {
            return true;
        } else {
            return false;
        }
    }
}

function buscaFatoPorAno(ano) {
    let fatoSelect = fatosHistoricos.find(fato => {
        return fato.Ano == ano
    })
    return fatoSelect ;
}

export { buscaFatoPorAno, validaAno };