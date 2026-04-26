function gerarMensagem() {

    let mensagens = [
        "Você é incrível! 💖",
        "Deus está nos detalhes! 🙌🏻🙏🏻",
        "Hoje vai dar tudo certo! ✨",
        "Confie em você! 💪",
        "Nunca desista! 🚀",
        "Seu esforço vale a pena! 🌟"
    ];

    let cores = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];

    // Sorteia mensagem
    let sorteio = Math.floor(Math.random() * mensagens.length);

    // Sorteia cor
    let cor = cores[Math.floor(Math.random() * cores.length)];

    // Cria elemento
    let p = document.createElement("p");
    p.classList.add("mensagem");

    // EXIBE A MENSAGEM (corrigido)
    p.innerHTML = mensagens[sorteio];

    // COR DO TEXTO (corrigido para não sumir)
    p.style.color = "#000";

    // Mostra no HTML
    let div = document.getElementById("resultado");
    div.innerHTML = "";
    div.appendChild(p);

    // Muda cor do fundo da página
    document.body.style.backgroundColor = cor;

    // Remove classe depois
    setTimeout(() => {
        p.classList.remove("mensagem");
    }, 2000);
}
