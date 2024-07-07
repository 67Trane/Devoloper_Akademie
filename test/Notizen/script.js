let titles = ["test", "tesss"];
let messages = ["hans"];
let deletedtitles = ["peter"];
let deletedmessages = ["jürgen"];
load();


function render() {
  let content = document.getElementById("content");

  content.innerHTML = "";

  for (let i = 0; i < titles.length; i++) {
    content.innerHTML += `
  <div class="notice">
        <input class="title" placeholder="Title..." value="${titles[i]}"> <br>
        <input class="message" placeholder="Message..." value="${messages[i]}"> <br>
        <div class="buttomMenu">
            <button onclick="deleteContent(${i})">Löschen</button>
        </div>
    </div>
  `;
  }showdeltedItem();
}

function addContent() {
  let title = document.getElementById("title").value;
  let message = document.getElementById("message").value;
  if (title == 0 || message == 0) {
    alert("Bitte Titel oder Notize eingeben");
  } else {
    titles.push(title);
    messages.push(message);
    render();
    save();
  }
}

function deleteContent(i) {
  deletedtitles.push(titles[i]);
  deletedmessages.push(messages[i]);

  titles.splice(i, 1);
  messages.splice(i, 1);

  render();
  save();
  showdeltedItem();
}

function save() {
  let titlesastext = JSON.stringify(titles);
  localStorage.setItem("titles", titlesastext);
  let messagesastext = JSON.stringify(messages);
  localStorage.setItem("messages", messagesastext);
  let deletedtitleastext = JSON.stringify(deletedtitles);
  localStorage.setItem("dtitles", deletedtitleastext);
  let deletedmessageastext = JSON.stringify(deletedmessages);
  localStorage.setItem("dmessages", deletedmessageastext);
}

function load() {
    let titlesastext = localStorage.getItem("titles");
    let messagesastext = localStorage.getItem("messages");
    let deletedtitleastext = localStorage.getItem("dtitles");
    let deletedmessageastext = localStorage.getItem("dmessages");
  
    if (titlesastext) {
      titles = JSON.parse(titlesastext);
    }
    if (messagesastext) {
      messages = JSON.parse(messagesastext);
    }
    if (deletedtitleastext) {
      deletedtitles = JSON.parse(deletedtitleastext);
    }
    if (deletedmessageastext) {
      deletedmessages = JSON.parse(deletedmessageastext);
    }
  
    if (!titles) {
      titles = [];
    }
    if (!messages) {
      messages = [];
    }
    if (!deletedtitles) {
      deletedtitles = [];
    }
    if (!deletedmessages) {
      deletedmessages = [];
    }
  }

function showdeltedItem() {
  let delted = document.getElementById("deltedcontent");

  delted.innerHTML = "";
  for (let i = 0; i < deletedtitles.length; i++) {
    delted.innerHTML += `<p> ${deletedtitles[i]} </p>`;
    delted.innerHTML += `<p> ${deletedmessages[i]} </p>`;
    delted.innerHTML += `<button onclick="destroy(${i})">löschen</button>`;
    delted.innerHTML += `<button onclick="reverse('${deletedtitles[i]}', '${deletedmessages[i]}')">Reverse</button>`;

  }
}

function destroy(i) {
  deletedtitles.splice(i, 1);
  deletedmessages.splice(i, 1);
  save()
  showdeltedItem();
}

function reverse(dtitles, dmessages) {
  titles.push(dtitles);
  messages.push(dmessages);
  
  save()
  render();
}
