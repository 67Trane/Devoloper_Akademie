function onloadFunc() {
  console.log("test");
  postData(path = "/name", data = {"test": "asd"})
}

const BASE_URL =
  "https://remotestorage-6505e-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path = "") {
  let response = await fetch(BASE_URL + path + ".json");
  let responseToJson = await response.json();

  console.log(responseToJson);
}

async function postData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

async function deleteData(path="") {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}
