
# Trabalho Prático - Finalização.

## Informações Gerais

- Nome: Igor Pereira Apolinário
- Matricula: 912034
- Decreva brevemente seu projeto: Projeto de música que linka artistas e certos albuns.

## Prints do trabalho

<<  COLOQUE A IMAGEM - HOME-PAGE - AQUI >>

![front page](fp_musiquium.png)

<<  COLOQUE A IMAGEM - TELA DE DETALHES - AQUI >>

![Desc](fpDesc_musiquieum.png)

## Dados em JSON
Inclua aqui a estrutura de dados definida por você para o projeto com pelo menos dois exemplo de dados.



const dados = {
  "bandas": [
    {
      "id": 1,
      "nome": "Daft Punk",
      "descricao": "Dupla francesa pioneira na música eletrônica.",
      "conteudo": "Conhecidos pelos seus capacetes robóticos e fusão de house com synthpop. Marcaram gerações com hits que definiram a cultura de pistas de dança.",
      "pais": "França",
      "destaque": true,
      "data": "1993-01-01",
      "imagemPrincipal": "https://picsum.photos/id/145/800/400" 
    },
    {
      "id": 2,
      "nome": "The Midnight",
      "descricao": "Banda de synthwave que evoca a nostalgia dos anos 80.",
      "conteudo": "Misturando saxofones marcantes com sintetizadores pesados, eles criam trilhas sonoras perfeitas para dirigir à noite pela cidade.",
      "pais": "EUA",
      "destaque": true,
      "data": "2012-01-01",
      "imagemPrincipal": "https://picsum.photos/id/163/800/400"
    },
    {
      "id": 3,
      "nome": "Pink Floyd",
      "descricao": "Lendas do rock progressivo e psicodélico.",
      "conteudo": "Reconhecidos por suas letras filosóficas, experimentação sonora e shows elaborados que revolucionaram a indústria musical.",
      "pais": "Reino Unido",
      "destaque": false,
      "data": "1965-01-01",
      "imagemPrincipal": "https://picsum.photos/id/452/800/400"
    },
    {
      "id": 4,
      "nome": "Gunship",
      "descricao": "Trio britânico de synthwave focado em ficção científica.",
      "conteudo": "Seus videoclipes em pixel art e estilo cyberpunk os tornaram figuras carimbadas na estética retrowave moderna.",
      "pais": "Reino Unido",
      "destaque": true,
      "data": "2010-01-01",
      "imagemPrincipal": "https://picsum.photos/id/532/800/400"
    }
  ],
  "albuns": [
    { "id": 1, "bandaId": 1, "nome": "Discovery", "descricao": "O álbum que definiu uma era do eletro-pop.", "imagem": "https://picsum.photos/id/43/400/300" },
    { "id": 2, "bandaId": 1, "nome": "Random Access Memories", "descricao": "Homenagem à música dos anos 70 e 80.", "imagem": "https://picsum.photos/id/44/400/300" },
    { "id": 3, "bandaId": 2, "nome": "Endless Summer", "descricao": "A trilha sonora perfeita para o pôr do sol.", "imagem": "https://picsum.photos/id/45/400/300" },
    { "id": 4, "bandaId": 2, "nome": "Nocturnal", "descricao": "Vibrações noturnas e saxofones estonteantes.", "imagem": "https://picsum.photos/id/46/400/300" },
    { "id": 5, "bandaId": 3, "nome": "The Dark Side of the Moon", "descricao": "Um dos álbuns mais vendidos da história.", "imagem": "https://picsum.photos/id/47/400/300" },
    { "id": 6, "bandaId": 4, "nome": "Dark All Day", "descricao": "Uma jornada cyberpunk cheia de sintetizadores.", "imagem": "https://picsum.photos/id/48/400/300" }
  ]
};