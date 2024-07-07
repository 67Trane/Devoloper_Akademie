let names = ["Erica Mustermann", "John Doe"];
let phonenumbers = ["015712345678", "015798765432"];
load();

function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += `<h1>My Contacts</h1>`;
  content.innerHTML += `
  <input type="text" placeholder="Name" id="name">
  <input type="text" placeholder="Telefon" id="phone">
  <button onclick="addContact()">Hinzufügen</button>`;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const phonenumber = phonenumbers[i];
    content.innerHTML += `
        <div class="card"> 
        <b> Name: </b> ${name} <br>
        <b> Telefon: </b> ${phonenumber} <br>
        <button onclick="deleteContact(${i})">Löschen</button> 
        </div>`;
  }
}

function addContact() {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");

  names.push(name.value);
  phonenumbers.push(phone.value);
  render();
  save();
}

function deleteContact(i) {
  names.splice(i, 1);
  phonenumbers.splice(i, 1);
  render();
  save();
}

function save() {
  let namesAsText = JSON.stringify(names);
  localStorage.setItem("names", namesAsText);
  let phonenumberAstext = JSON.stringify(phonenumbers);
  localStorage.setItem("phone", phonenumberAstext);
}

function load() {
  let namesAsText = localStorage.getItem("names");
  let phonenumberAstext = localStorage.getItem("phone");

  if (namesAsText && phonenumberAstext) {
    names = JSON.parse(namesAsText);
    phonenumbers = JSON.parse(phonenumberAstext);
  }
}
