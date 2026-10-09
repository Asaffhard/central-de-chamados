export const chamados = [];

export function criarChamado(dados) {
    const chamado = {
        id: chamados.length + 1,
        titulo: dados.titulo,
        descricao: dados.descricao,
        categoria: dados.categoria,
        prioridade: dados.prioridade,
        solicitante: dados.solicitante,
        status: "Aberto"
    };

    chamados.push(chamado);

    return chamado;
}

export function exibirChamados(lista, corpoTabela) {
    corpoTabela.replaceChildren();

    lista.forEach(function (chamado) {
        const linha = document.createElement("tr");

        const valores = [
            chamado.id,
            chamado.titulo,
            chamado.categoria,
            chamado.prioridade,
            chamado.solicitante
        ];

        valores.forEach(function (valor) {
            const celula = document.createElement("td");
            celula.textContent = valor;
            linha.appendChild(celula);
        });

        const celulaStatus = document.createElement("td");
        const seletorStatus = document.createElement("select");

        const statusDisponiveis = [
            "Aberto",
            "Em andamento",
            "Concluído"
        ];

        statusDisponiveis.forEach(function (status) {
            const opcao = document.createElement("option");

            opcao.value = status;
            opcao.textContent = status;

            seletorStatus.appendChild(opcao);
        });

        seletorStatus.value = chamado.status;
        seletorStatus.dataset.id = chamado.id;
        seletorStatus.className = "status-chamado";

        celulaStatus.appendChild(seletorStatus);
        linha.appendChild(celulaStatus);

        const celulaDetalhes = document.createElement("td");
        const botaoDetalhes = document.createElement("button");

        botaoDetalhes.textContent = "Detalhes";
        botaoDetalhes.dataset.id = chamado.id;
        botaoDetalhes.className = "detalhes-chamado";

        celulaDetalhes.appendChild(botaoDetalhes);
        linha.appendChild(celulaDetalhes);

        corpoTabela.appendChild(linha);
    });
}

