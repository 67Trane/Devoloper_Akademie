let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

function render() {
  let contentbox = document.getElementById("content-area");

  for (let i = 0; i < books.length; i++) {
    contentbox.innerHTML += `
    <div class="contentbox" id="contentbox${i}">
    ${renderTitle(books[i].name)}
    <div class="separator"></div>
    ${renderImage()}
    <div class="separator"></div>
    ${renderPriceLike(books[i].price, books[i].likes, i)}
    ${renderInfos(books[i].author, books[i].publishedYear, books[i].genre)}
    <div class="separator"></div>
    ${renderCommentSection()}
    ${renderComments(books[i].comments)}
    </div>
    ${renderInput(i)}
    </div>
    `;
  }
}

function renderTitle(title) {
  return `<h1 class="booktitle">${title}</h1>`;
}

function renderImage() {
  return `<img src="./icons/book .png" alt="" class="bookimg">`;
}

function renderPriceLike(price, likes, i) {
  let newprice = price.toFixed(2);
  let realynewprice = newprice.toString().replace(".", ",");
  return `
    <div class="likesection">
        <h2>${realynewprice}€</h2><div class="likes">${likes}<img src="icons/whiteheart.png" alt="" class="whiteheart" id="whiteheart${i}" onclick="toogleLike(${i})"><img src="icons/redheart.png" alt="" class="redheart d-none" onclick="toogleLike(${i})" id="redheart${i}"></div>
    </div>`;
}

function renderInfos(author, year, genre) {
  return `
    <div class="infosection">
      <div id="infotitle" class="infotitle">
          <p>Author</p><p>Erscheinungsjahr</p><p>Genre</p>
      </div>
      <div id="renderinfos" class="renderinfos">
          <p>: ${author}</p><p>: ${year}</p><p>: ${genre}</p>
      </div>
    </div>
    `;
}

function renderCommentSection() {
  return ` 
  <div class="commentheadline"><h2>Kommentare:</h2></div>
  <div class="commentsection" id="commentsection">
  `;
}

function renderComments(allcomments) {
  let commentarray = [];
  for (let i = 0; i < allcomments.length; i++) {
    let user = allcomments[i].name;
    let comment = allcomments[i].comment;

    commentarray.push(`<div id="users" class="users">
          <p>[${user}]</p>
      </div>
      <div id="comments" class="comments">
          <p>: ${comment}</p>
      </div>`);
  }
  combi = commentarray.join("");
  return combi;
}

function renderInput(i) {
  return `<div class="inputsection"><input type="text" name="" class="comment-input" id="comment-input${i}" placeholder="Schreibe dein Kommentar ..."><img src="./icons/send.png" alt="" class="sendimg"></div>`;
}

function toogleLike(i) {
  let whiteheart = document.getElementById(`whiteheart${i}`);
  let redheart = document.getElementById(`redheart${i}`);

  whiteheart.classList.toggle("d-none");
  redheart.classList.toggle("d-none");
}
