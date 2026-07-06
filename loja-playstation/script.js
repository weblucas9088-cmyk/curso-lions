// Dados dos jogos
const jogos = [
    {
        id: 1,
        titulo: "God of War Ragnarök",
        genero: "Ação/Aventura",
        plataforma: "PS5",
        preco: 249.90,
        precoAntigo: 299.90,
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
        oferta: false
    },
    {
        id: 2,
        titulo: "Spider-Man 2",
        genero: "Ação/Aventura",
        plataforma: "PS5",
        preco: 279.90,
        precoAntigo: 349.90,
        imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
        oferta: true
    },
    {
        id: 3,
        titulo: "The Last of Us Part II",
        genero: "Ação/Aventura",
        plataforma: "PS4",
        preco: 149.90,
        precoAntigo: 199.90,
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
        oferta: true
    },
    {
        id: 4,
        titulo: "Horizon Forbidden West",
        genero: "Aventura",
        plataforma: "PS5",
        preco: 199.90,
        precoAntigo: 249.90,
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400",
        oferta: false
    },
    {
        id: 5,
        titulo: "Gran Turismo 7",
        genero: "Corrida",
        plataforma: "PS5",
        preco: 229.90,
        precoAntigo: 279.90,
        imagem: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400",
        oferta: false
    },
    {
        id: 6,
        titulo: "Ratchet & Clank: Rift Apart",
        genero: "Aventura",
        plataforma: "PS5",
        preco: 189.90,
        precoAntigo: 229.90,
        imagem: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
        oferta: false
    },
    {
        id: 7,
        titulo: "Demon's Souls",
        genero: "RPG",
        plataforma: "PS5",
        preco: 219.90,
        precoAntigo: 269.90,
        imagem: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=400",
        oferta: false
    },
    {
        id: 8,
        titulo: "Returnal",
        genero: "Ação",
        plataforma: "PS5",
        preco: 179.90,
        precoAntigo: 219.90,
        imagem: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400",
        oferta: false
    },
    {
        id: 9,
        titulo: "Ghost of Tsushima",
        genero: "Ação/Aventura",
        plataforma: "PS4",
        preco: 129.90,
        precoAntigo: 169.90,
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
        oferta: true
    },
    {
        id: 10,
        titulo: "Uncharted 4",
        genero: "Aventura",
        plataforma: "PS4",
        preco: 99.90,
        precoAntigo: 149.90,
        imagem: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?w=400",
        oferta: true
    }
];

// Carrinho de compras
let carrinho = [];

// Elementos do DOM
const listaJogos = document.getElementById('listaJogos');
const listaOfertas = document.getElementById('listaOfertas');
const contagemCarrinho = document.getElementById('contagemCarrinho');
const modalCarrinho = document.getElementById('modalCarrinho');
const itensCarrinho = document.getElementById('itensCarrinho');
const totalCarrinho = document.getElementById('totalCarrinho');
const abrirCarrinho = document.getElementById('abrirCarrinho');
const fecharModal = document.querySelector('.fechar-modal');
const finalizarCompra = document.getElementById('finalizarCompra');
const botoesFiltro = document.querySelectorAll('.filtro-btn');

// Renderizar jogos
function renderizarJogos(filtro = 'todos') {
    listaJogos.innerHTML = '';
    
    let jogosFiltrados = jogos;
    
    if (filtro !== 'todos') {
        jogosFiltrados = jogos.filter(jogo => {
            if (filtro === 'ps5' || filtro === 'ps4') {
                return jogo.plataforma.toLowerCase() === filtro;
            }
            return jogo.genero.toLowerCase().includes(filtro);
        });
    }
    
    jogosFiltrados.forEach(jogo => {
        const card = criarCardJogo(jogo);
        listaJogos.appendChild(card);
    });
}

// Renderizar ofertas
function renderizarOfertas() {
    listaOfertas.innerHTML = '';
    
    const jogosEmOferta = jogos.filter(jogo => jogo.oferta);
    
    jogosEmOferta.forEach(jogo => {
        const card = criarCardJogo(jogo);
        listaOfertas.appendChild(card);
    });
}

// Criar card do jogo
function criarCardJogo(jogo) {
    const card = document.createElement('div');
    card.className = 'jogo-card';
    card.innerHTML = `
        <img src="${jogo.imagem}" alt="${jogo.titulo}" class="jogo-imagem">
        <div class="jogo-info">
            <h3 class="jogo-titulo">${jogo.titulo}</h3>
            <p class="jogo-genero">${jogo.genero}</p>
            <span class="jogo-plataforma">${jogo.plataforma}</span>
            <div class="jogo-preco">
                <div>
                    <span class="preco-atual">R$ ${jogo.preco.toFixed(2)}</span>
                    <span class="preco-antigo">R$ ${jogo.precoAntigo.toFixed(2)}</span>
                </div>
                <button class="btn-adicionar" onclick="adicionarAoCarrinho(${jogo.id})">
                    Adicionar
                </button>
            </div>
        </div>
    `;
    return card;
}

// Adicionar ao carrinho
function adicionarAoCarrinho(id) {
    const jogo = jogos.find(j => j.id === id);
    const itemExistente = carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ ...jogo, quantidade: 1 });
    }
    
    atualizarCarrinho();
    
    // Feedback visual
    const btn = event.target;
    const textoOriginal = btn.textContent;
    btn.textContent = 'Adicionado!';
    btn.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        btn.textContent = textoOriginal;
        btn.style.backgroundColor = '';
    }, 1000);
}

// Remover do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

// Atualizar carrinho
function atualizarCarrinho() {
    contagemCarrinho.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);
    renderizarItensCarrinho();
}

// Renderizar itens do carrinho
function renderizarItensCarrinho() {
    itensCarrinho.innerHTML = '';
    
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p style="text-align: center; color: #666;">Seu carrinho está vazio</p>';
        totalCarrinho.textContent = '0,00';
        return;
    }
    
    carrinho.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'item-carrinho';
        itemEl.innerHTML = `
            <div>
                <strong>${item.titulo}</strong>
                <p>Qtd: ${item.quantidade} | R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        itensCarrinho.appendChild(itemEl);
    });
    
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    totalCarrinho.textContent = total.toFixed(2).replace('.', ',');
}

// Abrir modal
abrirCarrinho.addEventListener('click', () => {
    modalCarrinho.classList.add('ativo');
});

// Fechar modal
fecharModal.addEventListener('click', () => {
    modalCarrinho.classList.remove('ativo');
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
    if (e.target === modalCarrinho) {
        modalCarrinho.classList.remove('ativo');
    }
});

// Finalizar compra
finalizarCompra.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    alert(`Compra realizada com sucesso!\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado pela preferência!`);
    
    carrinho = [];
    atualizarCarrinho();
    modalCarrinho.classList.remove('ativo');
});

// Filtros
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        
        const filtro = botao.dataset.filtro;
        renderizarJogos(filtro);
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarJogos();
    renderizarOfertas();
    atualizarCarrinho();
});
