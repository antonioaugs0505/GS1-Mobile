# API Notícias e Usuários

API para obter informações sobre notícias e gerenciar usuários.

---

## Endpoints

### 1. GET /noticias

Retorna a lista de notícias disponíveis.

**Exemplo de Requisição:**

```http
GET http://localhost:8080/noticias

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

GET http://localhost:8080/noticias/1

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


GET http://localhost:8080/usuarios

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

POST http://localhost:8080/usuarios

{
  "nome": "José",
  "email": "jose@example.com"
}

{
  "id": 3,
  "nome": "José",
  "email": "jose@example.com"
}


