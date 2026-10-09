
export function atualizarDashboard(chamados) {
    const total = document.getElementById("total-chamados");
    const abertos = document.getElementById("chamados-abertos");
    const andamento = document.getElementById("chamados-em-andamento");
    const concluidos = document.getElementById("chamados-concluidos");

    const quantidadeAbertos = chamados.filter(
        chamado => chamado.status === "Aberto"
    ).length;

    const quantidadeAndamento = chamados.filter(
        chamado => chamado.status === "Em andamento"
    ).length;

    const quantidadeConcluidos = chamados.filter(
        chamado => chamado.status === "Concluído"
    ).length;

    total.textContent = chamados.length;

    abertos.textContent = `Abertos: ${quantidadeAbertos}`;

    andamento.textContent =
        `Em Andamento: ${quantidadeAndamento}`;

    concluidos.textContent =
        `Concluídos: ${quantidadeConcluidos}`;
}

