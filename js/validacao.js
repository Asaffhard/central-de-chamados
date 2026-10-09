
export function validarChamado(dados) {
    if (dados.titulo.length < 5) {
        alert("O título deve ter pelo menos 5 caracteres.");
        return false;
    }

    if (dados.descricao.length < 10) {
        alert("A descrição deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (!dados.categoria) {
        alert("Selecione uma categoria.");
        return false;
    }

    if (!dados.prioridade) {
        alert("Selecione uma prioridade.");
        return false;
    }

    if (dados.solicitante.length < 3) {
        alert("Informe o nome do solicitante.");
        return false;
    }

    return true;
}


