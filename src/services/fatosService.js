import fatosHistoricos  from "../../src/models/fatos.js";

function buscaFatoPorAno(ano){
    let fatoSelect = fatosHistoricos.find(fato => {
        return fato.Ano == ano
    })
    return fatoSelect;
}

export {buscaFatoPorAno};