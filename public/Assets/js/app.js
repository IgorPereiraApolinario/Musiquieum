
const dados = {
  "bandas": [
    {
      "id": 5,
      "nome": "Linkin Park",
      "descricao": "Uma das bandas mais influentes e bem-sucedidas do século XXI.",
      "conteudo": "Fundindo perfeitamente o peso do metal, beats de hip-hop e a voz inconfundível de Chester Bennington. Eles ditaram as regras do Nu-Metal comercial nos anos 2000.",
      "pais": "EUA",
      "destaque": true,
      "data": "1996-05-15",
      "imagemPrincipal": "assets/img/Linkin_Park.jpg" 
    },
    {
      "id": 6,
      "nome": "Korn",
      "descricao": "Os pioneiros e criadores do movimento Nu-Metal.",
      "conteudo": "Com guitarras de 7 cordas afinadas lá embaixo e linhas de baixo com muito 'slap', o Korn moldou a estética sombria do gênero nos anos 90.",
      "pais": "EUA",
      "destaque": true,
      "data": "1993-02-20",
      "imagemPrincipal": "assets/img/korn.webp" 
    },
    {
      "id": 7,
      "nome": "Slipknot",
      "descricao": "Caos sonoro, masks icônicas e uma energia avassaladora.",
      "conteudo": "Diretamente de Iowa, a banda levou o Nu-Metal a extremos de agressividade com três percussionistas, DJs e samples, criando um verdadeiro espetáculo teatral e agressivo.",
      "pais": "EUA",
      "destaque": true,
      "data": "1995-09-01",
      "imagemPrincipal": "assets/img/Slipknot.jpg"
    },
    {
      "id": 8,
      "nome": "Deftones",
      "descricao": "A vertente mais experimental, densa e atmosférica do gênero.",
      "conteudo": "Conhecidos pela dinâmica única entre os riffs esmagadores de Stephen Carpenter e os vocais que alternam entre sussurros sedutores e gritos agonizantes de Chino Moreno.",
      "pais": "EUA",
      "destaque": true,
      "data": "1988-08-18",
      "imagemPrincipal": "assets/img/Deftones.jpg"
    }
  ],
  "albuns": [
    { "id": 1, "bandaId": 1, "nome": "Discovery", "descricao": "O álbum que definiu uma era do eletro-pop.", "imagem": "https://picsum.photos/id/43/400/300" },
    { "id": 2, "bandaId": 1, "nome": "Random Access Memories", "descricao": "Homenagem à música dos anos 70 e 80.", "imagem": "https://picsum.photos/id/44/400/300" },
    { "id": 3, "bandaId": 2, "nome": "Endless Summer", "descricao": "A trilha sonora perfeita para o pôr do sol.", "imagem": "https://picsum.photos/id/45/400/300" },
    { "id": 4, "bandaId": 2, "nome": "Nocturnal", "descricao": "Vibrações noturnas e saxofones estonteantes.", "imagem": "https://picsum.photos/id/46/400/300" },
    { "id": 5, "bandaId": 3, "nome": "The Dark Side of the Moon", "descricao": "Um dos álbuns mais vendidos da história.", "imagem": "https://picsum.photos/id/47/400/300" },
    { "id": 6, "bandaId": 4, "nome": "Dark All Day", "descricao": "Uma jornada cyberpunk cheia de sintetizadores.", "imagem": "https://picsum.photos/id/48/400/300" },
    { "id": 7, "bandaId": 5, "nome": "Hybrid Theory", "descricao": "O disco de estreia que vendeu milhões e marcou os anos 2000.", "imagem": "assets/img/Hybrid_theory.jpg" },
    { "id": 8, "bandaId": 5, "nome": "Meteora", "descricao": "Refinou a fórmula perfeita de rap, rock e eletrônica.", "imagem": "assets/img/meteora.jpg" },
    { "id": 9, "bandaId": 6, "nome": "Follow the Leader", "descricao": "O álbum que levou o Korn e o Nu-Metal para o topo das paradas mundiais.", "imagem": "assets/img/Korn_Followe_The_Leader.jpg" },
    { "id": 10, "bandaId": 7, "nome": "Iowa", "descricao": "Um dos registros mais pesados, sombrios e técnicos do metal moderno.", "imagem": "assets/img/SlipknotIowaCapa.jpg" }, // 👈 Caminho local atualizado aqui!
    { "id": 11, "bandaId": 8, "nome": "White Pony", "descricao": "Obra-prima alternativa que misturou metal com influências de shoegaze.", "imagem": "assets/img/DeftonesWhitePony.jpg" }
  ]
};
// Quando o documento carregar, identifica qual tela está ativa
document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById('cards-container')) {
        carregarIndex();
    } 

    else if (document.getElementById('detalhe-info-section')) {
        carregarDetalhes();
    }
});

// FUNÇÕES DA TELA PRINCIPAL (index.html)
function carregarIndex() {
    const carrosselInner = document.getElementById('carousel-inner-content');
    const cardsContainer = document.getElementById('cards-container');
    
    const destaques = dados.bandas.filter(banda => banda.destaque);
    
    destaques.forEach((banda, index) => {
        let activeClass = index === 0 ? 'active' : '';
        let slideHTML = `
            <div class="carousel-item ${activeClass}">
                <a href="detalhes.html?id=${banda.id}">
                    <img src="${banda.imagemPrincipal}" class="d-block w-100 carousel-img" alt="${banda.nome}">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="neon-text-pink">${banda.nome}</h3>
                        <p>${banda.descricao}</p>
                    </div>
                </a>
            </div>
        `;
        carrosselInner.innerHTML += slideHTML;
    });

    dados.bandas.forEach(banda => {
        let cardHTML = `
            <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="card card-musiquieum w-100 text-light">
                    <img src="${banda.imagemPrincipal}" class="card-img-top" alt="${banda.nome}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title neon-text-blue">${banda.nome}</h5>
                        <p class="card-text flex-grow-1">${banda.descricao}</p>
                        <a href="detalhes.html?id=${banda.id}" class="btn btn-outline-info mt-auto">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });
}

// FUNÇÕES DA TELA DE DETALHES (detalhes.html)
function carregarDetalhes() {

    const urlParams = new URLSearchParams(window.location.search);
    const idBanda = parseInt(urlParams.get('id'));

    // Encontrar a banda correspondente no JSON
    const banda = dados.bandas.find(b => b.id === idBanda);

    if (!banda) {
        document.getElementById('detalhe-info-section').innerHTML = `<h2 class="text-danger text-center">Banda não encontrada!</h2>`;
        return;
    }

    const infoSection = document.getElementById('detalhe-info-section');
    infoSection.innerHTML = `
        <div class="row align-items-center bg-black p-4 neon-box">
            <div class="col-md-6">
                <img src="${banda.imagemPrincipal}" alt="${banda.nome}" class="img-detalhe mb-3 mb-md-0">
            </div>
            <div class="col-md-6">
                <h1 class="neon-text-pink mb-3">${banda.nome}</h1>
                <h5 class="text-secondary mb-3">📍 Origem: <span class="text-light">${banda.pais}</span></h5>
                <p class="lead text-info">${banda.descricao}</p>
                <p>${banda.conteudo}</p>
                <p class="text-muted small">Registrado no sistema em: ${banda.data}</p>
            </div>
        </div>
    `;

    const albunsContainer = document.getElementById('albuns-container');
    const albunsDaBanda = dados.albuns.filter(album => album.bandaId === idBanda);

    if (albunsDaBanda.length > 0) {
        albunsDaBanda.forEach(album => {
            let albumHTML = `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="card card-musiquieum text-light h-100">
                        <img src="${album.imagem}" class="card-img-top album-img" alt="${album.nome}">
                        <div class="card-body">
                            <h6 class="card-title text-info">${album.nome}</h6>
                            <p class="card-text small">${album.descricao}</p>
                        </div>
                    </div>
                </div>
            `;
            albunsContainer.innerHTML += albumHTML;
        });
    } else {
        albunsContainer.innerHTML = `<p class="text-muted">Nenhum álbum registrado para este artista ainda.</p>`;
    }
}