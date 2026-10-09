
import {
    chamados,
    criarChamado,
    exibirChamados
} from "./chamados.js";

import { validarChamado } from "./validacao.js";
import { atualizarDashboard } from "./dashboard.js";
import { filtrarChamados } from "./filtros.js";

const formulario = document.getElementById("form-chamado");
const corpoTabela = document.getElementById("corpo-tabela");
const campoBusca = document.getElementById("busca");
const filtroStatus = document.getElementById("filtro-status");

function atualizarTela() {
    const texto = campoBusca.value.trim();
    const status = filtroStatus.value;

    const resultado = filtrarChamados(
        chamados,
        texto,
        status
    );

    exibirChamados(resultado, corpoTabela);
    atualizarDashboard(chamados);
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        titulo: document.getElementById("titulo").value.trim(),
        descricao: document.getElementById("descricao").value.trim(),
        categoria: document.getElementById("categoria").value,
        prioridade: document.getElementById("prioridade").value,
        solicitante: document.getElementById("solicitante").value.trim()
    };

    if (!validarChamado(dados)) {
        return;
    }

    criarChamado(dados);

    formulario.reset();

    atualizarTela();
});

campoBusca.addEventListener("input", atualizarTela);

filtroStatus.addEventListener("change", atualizarTela);


corpoTabela.addEventListener("change", function (event) {
    if (!event.target.matches(".status-chamado")) {
        return;
    }

    const id = Number(event.target.dataset.id);

    const chamado = chamados.find(function (item) {
        return item.id === id;
    });

    if (chamado) {
        chamado.status = event.target.value;
        atualizarTela();
    }
});

corpoTabela.addEventListener("click", function (event) {
    if (!event.target.matches(".detalhes-chamado")) {
        return;
    }

    const id = Number(event.target.dataset.id);

    const chamado = chamados.find(function (item) {
        return item.id === id;
    });

    if (chamado) {
        alert(
            `Chamado #${chamado.id}\n` +
            `Título: ${chamado.titulo}\n` +
            `Descrição: ${chamado.descricao}\n` +
            `Categoria: ${chamado.categoria}\n` +
            `Prioridade: ${chamado.prioridade}\n` +
            `Solicitante: ${chamado.solicitante}\n` +
            `Status: ${chamado.status}`
        );
    }
});
