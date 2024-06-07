// api/noticiapi.js

// Simulação dos dados da API
const noticias = {
    _embedded: {
      noticiaModelList: [
        {
          id_Noticia: 12,
          nm_Titulo: "Gases de efeito estufa contaminam os oceanos, diz tribunal da ONU a favor de 9 Estados insulares",
          nm_Subtitulo: "O tribunal marítimo da ONU decidiu nesta terça-feira, 21, em favor de nove pequenos Estados insulares que apresentaram uma ação para pedir uma proteção maior dos oceanos frente às mudanças climáticas. Ao emitir o parecer, segundo o qual as emissões de carbono podem ser consideradas um contaminante marinho, o tribunal afirmou que os países têm a obrigação de tomar medidas para mitigar seus efeitos nos oceanos.\n\n",
          dt_Noticia: "2024-06-06",
          ds_Imagem: "https://classic.exame.com/wp-content/uploads/2024/05/GettyImages-519857406.jpg?ims=750x/filters:quality(75):format(webp)",
          ds_Link: "https://exame.com/esg/gases-de-efeito-estufa-contaminam-os-oceanos-diz-tribunal-da-onu-a-favor-de-9-estados-insulares/",
          _links: {
            self: { href: "http://127.0.0.1:8080/noticias/12" },
            noticias: { href: "http://127.0.0.1:8080/noticias" },
          },
        },
        {
          id_Noticia: 13,
          nm_Titulo: "Descoberto no México o maior buraco azul do mundo",
          nm_Subtitulo: "O maior buraco azul do mundo fica no México, mais especificamente na Península Yucatán, próximo ao Sistema Mesoamericano de Barreira de Corais. O Taam-Ja’, na Baía Chetumal, chegou a essa posição mesmo sem que os cientistas tenham conseguido atingir o ponto mais fundo do buraco. Até agora, os pesquisadores mediram mais de 420 metros de profundidade - o equivalente a 11 estátuas do Cristo Redentor empilhadas uma na outra. A Torre Eiffel, por exemplo, tem 330 metros de altura. Já a Estátua da Liberdade tem 93 metros.",
          dt_Noticia: "2024-06-06",
          ds_Imagem: "https://classic.exame.com/wp-content/uploads/2024/05/Captura-de-Tela-2024-05-01-as-19.17.18.png?ims=750x/filters:quality(75):format(webp)",
          ds_Link: "https://exame.com/esg/descoberto-no-mexico-o-maior-buraco-azul-do-mundo/",
          _links: {
            self: { href: "http://127.0.0.1:8080/noticias/13" },
            noticias: { href: "http://127.0.0.1:8080/noticias" },
          },
        },
        {
          id_Noticia: 1,
          nm_Titulo: "Especialistas realizarão na Costa Rica diagnóstico da saúde dos oceanos",
          nm_Subtitulo: "Cientistas, acadêmicos, dirigentes e ambientalistas debaterão entre sexta-feira (7) e sábado, na Costa Rica, medidas para a preservação e sustentabilidade dos oceanos diante das alterações climáticas e das ações humanas, um ano antes da conferência mundial sobre o tema que será realizada na França.",
          dt_Noticia: "2024-06-06",
          ds_Imagem: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1nLfST.img?w=76810=51210=410=94",
          ds_Link: "https://www.bol.uol.com.br/noticias/2024/06/06/especialistas-realizarao-na-costa-rica-diagnostico-da-saude-dos-oceanos.htm",
          _links: {
            self: { href: "http://127.0.0.1:8080/noticias/1" },
            noticias: { href: "http://127.0.0.1:8080/noticias" },
          },
        },
        {
          id_Noticia: 5,
          nm_Titulo: "Acordo de Paris sobre clima não é suficiente para proteger oceanos, decide tribunal",
          nm_Subtitulo: "Um grupo de pequenos Estados insulares, incluindo Antígua e Barbuda e as Bahamas, garantiu uma vitória sobre a mudança climática em um tribunal internacional nesta terça-feira (21), enquanto buscam combater o aumento do nível do mar.Em seu primeiro julgamento relacionado ao clima, o Tribunal Internacional para o Direito do Mar (ITLOS) disse que as emissões de gases de efeito estufa absorvidas pelo oceano são consideradas poluição marinha e os países são obrigados a proteger os ambientes marinhos, indo mais longe do que o exigido pelo acordo climático de Paris.\n\nO parecer foi solicitado por um grupo de nove nações insulares que enfrentam aumentos no nível do mar relacionados às mudanças climáticas.\n",
          dt_Noticia: "2024-06-06",
          ds_Imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/robert-linder-vK2wXKkb3Wc-unsplash.jpg?w=64010=48010=1",
          ds_Link: "https://www.cnnbrasil.com.br/internacional/acordo-de-paris-sobre-clima-nao-e-suficiente-para-proteger-oceanos-decide-tribunal/",
          _links: {
            self: { href: "http://127.0.0.1:8080/noticias/5" },
            noticias: { href: "http://127.0.0.1:8080/noticias" },
          },
        },
        {
          id_Noticia: 6,
          nm_Titulo: "Calor nos oceanos gera branqueamento de corais; níveis podem ser os piores já registrados",
          nm_Subtitulo: "Os recifes de corais de todo o mundo estão passando por um evento de branqueamento em massa à medida que a crise climática impulsiona o recorde de calor nos oceanos, disseram dois organismos científicos na segunda-feira (15) – com alguns especialistas alertando que esse pode se tornar o pior período de branqueamento da história já registrado.",
          dt_Noticia: "2024-06-06",
          ds_Imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/gopr0951-1.png?w=116010=65310=1",
          ds_Link: "https://cnnbrasil.com.br/internacional/calor-nos-oceanos-gera-branqueamento-de-corais-niveis-podem-ser-os-piores-ja-registrados/",
          _links: {
            self: { href: "http://127.0.0.1:8080/noticias/6" },
            noticias: { href: "http://127.0.0.1:8080/noticias" },
          },
        },
      {
        id_Noticia: 8,
        nm_Titulo: "Sistema de correntes do Atlântico mostra sinais de colapso; resultado pode ser catastrófico",
        nm_Subtitulo: "Usando sistemas de computação excepcionalmente complexos e caros, os cientistas encontraram uma nova maneira de detectar um sinal de alerta precoce para o colapso dessas correntes, de acordo com o estudo publicado sexta-feira (9) na revista Science Advances.\n\nE à medida que o planeta aquece, já há indícios de que está caminhando nessa direção.\n\nA Circulação Meridional do Atlântico (AMOC, na sigla em inglês), da qual a Corrente do Golfo faz parte, funciona como uma gigantesca transportadora global, levando água quente dos trópicos em direção ao extremo Atlântico Norte, onde a água esfria, torna-se mais salgada e afunda profundamente no oceano, antes de se espalhar para o sul.",
        dt_Noticia: "2024-06-06",
        ds_Imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/fundo-do-mar-e1707528796237.png?w=62110=34910=1",
        ds_Link: "https://www.cnnbrasil.com.br/internacional/sistema-de-correntes-do-atlantico-mostra-sinais-de-colapso-resultado-pode-ser-catastrofico/",
        _links: {
          self: { href: "http://127.0.0.1:8080/noticias/8" },
          noticias: { href: "http://127.0.0.1:8080/noticias" },
        },
      },
      {
        id_Noticia: 9,
        nm_Titulo: "Espécies ameaçadas de extinção se escondem em áreas marinhas protegidas, aponta relatório",
        nm_Subtitulo: "O Relatório sobre o Estado do Oceano (StOR, na sigla em inglês), divulgado nesta segunda-feira, 3, pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (Unesco), aponta que 72% das 1.473 espécies ameaçadas de extinção encontram abrigo em Áreas Marinhas Protegidas (AMPs). A existência destas unidades de conservação é fundamental para preservação de biodiversidade, para o apoio à segurança alimentar e para a saúde geral dos oceanos, mostra o documento.",
        dt_Noticia: "2024-06-06",
        ds_Imagem: "https://classic.exame.com/wp-content/uploads/2024/06/GettyImages-1642323275.jpg?ims=750x/filters:quality(75):format(webp)",
        ds_Link: "https://exame.com/esg/especies-ameacadas-de-extincao-se-escondem-em-areas-marinhas-protegidas-aponta-relatorio/",
        _links: {
          self: { href: "http://127.0.0.1:8080/noticias/9" },
          noticias: { href: "http://127.0.0.1:8080/noticias" },
        },
      },
      {
        id_Noticia: 10,
        nm_Titulo: "Enchente no RS: mancha escura de sedimentos chega ao oceano",
        nm_Subtitulo: "Imagens divulgadas nesta segunda-feira, 27, captadas por satélite, mostram que os sedimentos carregados pelos rios do Rio Grande do Sul durante as fortes chuvas das últimas semanas conseguiram cruzar a Lago dos Patos e desembocaram no oceano. É possível ver no registro uma mancha marrom se aproximando pela costa dos Molhes da Barra, da cidade de Rio Grande.",
        dt_Noticia: "2024-06-06",
        ds_Imagem: "https://classic.exame.com/wp-content/uploads/2024/05/Captura-de-Tela-2024-05-27-as-17.30.12.png?w=769",
        ds_Link: "https://exame.com/esg/enchente-no-rs-mancha-escura-de-sedimentos-chega-ao-oceano/",
        _links: {
          self: { href: "http://127.0.0.1:8080/noticias/10" },
          noticias: { href: "http://127.0.0.1:8080/noticias" },
        },
      },
      {
        id_Noticia: 11,
        nm_Titulo: "Metade de manguezais, importantes para combater mudanças climáticas, está em risco de colapso",
        nm_Subtitulo: "Metade dos ecossistemas de manguezais do mundo está em risco de colapso devido à mudança climática, o desmatamento e a poluição, segundo um estudo publicado nesta quarta-feira, 22, pela União Internacional para a Conservação da Natureza (IUCN, sigla em inglês).",
        dt_Noticia: "2024-06-06",
        ds_Imagem: "https://classic.exame.com/wp-content/uploads/2020/11/manguezal.jpg?ims=750x/filters:quality(75):format(webp)",
        ds_Link: "https://exame.com/esg/metade-de-manguezais-importantes-para-combater-mudancas-climaticas-esta-em-risco-de-colapso/",
        _links: {
          self: { href: "http://127.0.0.1:8080/noticias/11" },
          noticias: { href: "http://127.0.0.1:8080/noticias" },
        },
      },
    ],
  },
  _links: {
    self: { href: "http://127.0.0.1:8080/noticias" },
  },
};

export default noticias;

  