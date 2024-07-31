let users = [];

const BASE_URL =
  "https://remotestorage-6505e-default-rtdb.europe-west1.firebasedatabase.app/";

async function onloadFunc() {

  let userResponse = await getAllUsers("namen");
    
  let UserKeysArray = Object.keys(userResponse);
  console.log(UserKeysArray)
  for (let index = 0; index < UserKeysArray.length; index++) {
    users.push({
      id: UserKeysArray[index],
      user: userResponse[UserKeysArray[index]],
    });
  }
  addEditSingleUser(users[2].id, { name: "Lisa" });
}

async function putData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

async function addEditSingleUser(id = 44, user = { name: "jürgen" }) {
  putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
  let response = await fetch(BASE_URL + path + ".json");
  return (responseToJson = await response.json());
}
