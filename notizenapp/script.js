let titles = [];
let messages = [];
let deletedtitles = [];
let deletedmessages = [];
load();

function render() {
  let content = document.getElementById("content");

  content.innerHTML = "";

  for (let i = 0; i < titles.length; i++) {
    content.innerHTML += `
  <div class="notice" id="notice${i}">
        <input id="title${i}" class="title" placeholder="Title..." value="${titles[i]}" readonly> <br>
        <textarea name="message" id="message${i}" placeholder="Message..." readonly>${messages[i]}</textarea> <br>
        <div class="buttomMenu">
            <button onclick="deleteContent(${i})">Löschen</button>
            <button onclick="edit(${i})">Edit</button>
        </div>
    </div>
  `;
  }

  limit();
  showdeltedItem();
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
  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
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

  titles = titlesastext ? JSON.parse(titlesastext) : [];
  messages = messagesastext ? JSON.parse(messagesastext) : [];
  deletedtitles = deletedtitleastext ? JSON.parse(deletedtitleastext) : [];
  deletedmessages = deletedmessageastext
    ? JSON.parse(deletedmessageastext)
    : [];
}

function showdeltedItem() {
  let delted = document.getElementById("deltedcontent");

  delted.innerHTML = "";
  for (let i = 0; i < deletedtitles.length; i++)
    delted.innerHTML += `<div class="deletedcontent" id="deletedcontent${i}"><p> <b>Titel: </b> ${deletedtitles[i]} </p>
                      <p> <b>Notiz: </b>${deletedmessages[i]} </p>
                      <button onclick="destroy(${i})">löschen</button>
                      <button onclick="reverse('${deletedtitles[i]}', '${deletedmessages[i]}', '${i}')">Reverse</button></div>`;
}

function destroy(i) {
  deletedtitles.splice(i, 1);
  deletedmessages.splice(i, 1);
  save();
  showdeltedItem();
}

function reverse(dtitles, dmessages, i) {
  titles.push(dtitles);
  messages.push(dmessages);
  let content = document.getElementById(`deletedcontent${i}`);
  if (content) {
    content.remove();
  } else {
    alert("nicht gefunden")
  }
  deletedtitles.splice(i, 1)

  save();
  render();
}

function edit(i) {
  let title = document.getElementById(`title${i}`);
  let message = document.getElementById(`message${i}`);
  let container = document.getElementById(`notice${i}`);

  title.removeAttribute("readonly");
  message.removeAttribute("readonly");

  container.innerHTML += `<button onclick="saveedit(${i})" id="saveedit${i}">Save edit</button>`;

  save();
}

function saveedit(i) {
  let title = document.getElementById(`title${i}`);
  let message = document.getElementById(`message${i}`);
  let savebutton = document.getElementById(`saveedit${i}`);

  titles[i] = title.value;
  messages[i] = message.value;

  title.readOnly = true;
  message.readOnly = true;
  savebutton.remove();
  save();
}

function limit() {
  let message = document.getElementById("message");
  message.addEventListener("input", liveTracking);
}

function liveTracking(e) {
  let charlimit = document.getElementById("limit");
  let charcount = e.target.value;

  charlimit.textContent = charcount.length;
  if (charcount.length >= 500) {
    alert("maximale anzahl erreicht");
  }
}
