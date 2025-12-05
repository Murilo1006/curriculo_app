function abrirTela(tela) {
    // esconder todas
    document.querySelectorAll(".tela").forEach(div => {
        div.classList.add("escondido");
    });

    // mostrar apenas a pedida
    document.getElementById(tela).classList.remove("escondido");
}
