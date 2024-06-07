# API Notícias e Usuários

API para obter informações sobre notícias e gerenciar usuários.

---

## Endpoints

### 1. GET /noticias

Retorna a lista de notícias disponíveis.

**Exemplo de Requisição:**

GET http://localhost:8080/noticias

**Exemplo de Resposta:**

{
  "_embedded": {
    "noticiaModelList": [
      {
        "id_Noticia": 1,
        "nm_Titulo": "Exemplo de Título de Notícia",
        "nm_Subtitulo": "Exemplo de Subtítulo de Notícia",
        "dt_Noticia": "2024-06-07",
        "ds_Imagem": "https://example.com/image.jpg",
        "ds_Link": "https://example.com/noticia",
        "_links": {
          "self": { "href": "http://localhost:8080/noticias/1" },
          "noticias": { "href": "http://localhost:8080/noticias" }
        }
      }
    ]
  },
  "_links": {
    "self": { "href": "http://localhost:8080/noticias" }
  }
}

## 2. GET /noticias/{id}

Retorna detalhes de uma notícia específica pelo ID.

**Exemplo de Requisição:**

GET http://localhost:8080/noticias/1

**Exemplo de Resposta:**

{
  "id_Noticia": 1,
  "nm_Titulo": "Exemplo de Título de Notícia",
  "nm_Subtitulo": "Exemplo de Subtítulo de Notícia",
  "dt_Noticia": "2024-06-07",
  "ds_Imagem": "https://example.com/image.jpg",
  "ds_Link": "https://example.com/noticia",
  "_links": {
    "self": { "href": "http://localhost:8080/noticias/1" },
    "noticias": { "href": "http://localhost:8080/noticias" }
  }
}

## 3. GET /usuarios

Retorna a lista de usuários registrados.

**Exemplo de Requisição:**

GET http://localhost:8080/usuarios

**Exemplo de Resposta:**

{
  "usuarios": [
    {
      "id": 1,
      "nome": "João",
      "email": "joao@example.com"
    },
    {
      "id": 2,
      "nome": "Maria",
      "email": "maria@example.com"
    }
  ]
}

## 4. POST /usuarios

Cria um novo usuário.

**Exemplo de Requisição:**

POST http://localhost:8080/usuarios

{
  "nome": "José",
  "email": "jose@example.com"
}

**Exemplo de Resposta:**

{
  "id": 3,
  "nome": "José",
  "email": "jose@example.com"
}

## 5 PUT /usuarios

Atualiza os dados de um usuário existente.

**Exemplo de Requisição:**

PUT http://localhost:8080/usuarios/1

{
  "nome": "João Silva",
  "email": "joao.silva@example.com"
}

**Exemplo de Resposta:**

{
  "id": 1,
  "nome": "João Silva",
  "email": "joao.silva@example.com"
}
















