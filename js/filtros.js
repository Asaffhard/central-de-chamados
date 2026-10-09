
export function filtrarChamados(chamados, texto, status) {
    return chamados.filter(function (chamado) {
        const correspondeTitulo = chamado.titulo
            .toLowerCase()
            .includes(texto.toLowerCase());

        const correspondeStatus =
            status === "todos" || chamado.status === status;

        return correspondeTitulo && correspondeStatus;
    });
};
