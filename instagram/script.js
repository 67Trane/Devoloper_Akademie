let posts = [
  {
    account: "9gag",
    accountimg: "./icons/9gag.png",
    image: "./img/human.jpg",
    descritpion: "Vision's greates enemy",
    date: "vor 2 Tagen",
    location: "",
    like: 10,
    isliked: false,
    comment: {
      accountname: ["Peter", "Hans"],
      comment: ["tolles bild", "HAHA"],
    },
  },
  {
    account: "marcosptorre.tattoo",
    accountimg: "./icons/tattoo2.png",
    image: "./img/dbz.jpg",
    descritpion: "DRAGON BALL Z ⚡️ In my style",
    date: "vor 3 Stunden",
    location: "Lourdes",
    like: 1905343,
    isliked: false,
    comment: {
      accountname: [],
      comment: [],
    },
  },
  {
    account: "benjatattoo_",
    accountimg: "./icons/tattoo1.png",
    image: "./img/hunterxhunter.jpg",
    descritpion: "Komugi vs Meruem in Gungi battle scene",
    date: "vor 30 Minuten",
    location: "Vereinigtes Königreich",
    like: 503223,
    isliked: false,
    comment: {
      accountname: ["Peter", "jürgen"],
      comment: ["ayxcxycxycyx xyc yxcyx cyxcyx yxyxyxc", "test eins zwei"],
    },
  },
];

function show() {
  for (let x = 0; x < posts.length; x++) {
    load(x);
  }
  let post = document.getElementById("posts");

  for (let i = 0; i < posts.length; i++) {
    const j = posts[i];

    post.innerHTML += `
    <div class="postcontainer" id="postnr${i}">
        ${renderHeader(j, i)}
        ${renderImage(j)}
        ${renderbelowImage(i)}
        ${renderDescriptionsection(i, j)}
        <div class="commentSection" id="commentSection${i}">
        ${rendercomment(j)}
        </div>
        ${renderinputcomment(i)}
        <div class="seperator"></div>
    </div>
    `;
  }
}

function renderHeader(j, i) {
  return `<div class="header">
            <img src="${j["accountimg"]}" alt="" id="accountimg${i}">
            <div class="postaccountname"><span class="accountname">${j["account"]}</span><br><span class="location">${j["location"]}</span></div>
            <span style="margin-left: 10px;">${posts[i]["date"]}</span>
            <img src="./icons/dots.png" alt="" id="dots">
        </div>`;
}

function renderImage(j) {
  return ` <div class="postimage">
            <img src="${j["image"]}">
        </div>`;
}

function renderbelowImage(i) {
  notlike = "like d-none";
  liked = "like";

  if (posts[i]["isliked"]) {
    notlike = "like d-none";
    liked = "like";
  } else {
    notlike = "like ";
    liked = "like d-none";
  }
  return `
  <div class="belowimage"> 
    <div class="leftside">
      <img src="./icons/whiteheart.png" alt="" class="${notlike}" id="like${i}" onclick="like(${i})">
      <img src="./icons/redheart.png" alt="" class="${liked}" id="redlike${i}" onclick="like(${i})" >
      <img src="./icons/speech-bubble.png" alt="">
      <img src="./icons/send.png" alt="">
    </div>
    <img src="./icons/save.png" alt="">
  </div>`;
}

function renderDescriptionsection(i, j) {
  return `<div class="descritpionsection">
            <p id="renderlikes${i}">Gefällt ${j["like"].toLocaleString("de-DE")}</p>
            <p>${j["account"]} ${j["descritpion"]}</p>
        </div>
`;
}

function rendercomment(j) {
  let commentcount = j["comment"].accountname.length;
  let comment = [];

  for (let z = 0; z < commentcount; z++) {
    comment.push(`
    <div class="comment" id="comment${z}">
      <div class="bold">${j["comment"].accountname[z]}</div>
      <div class="textcomment">${j["comment"].comment[z]}</div>
      <img src="./icons/whiteheart.png" alt="">
    </div>
    `);
  }

  combi = comment.join("");
  return combi;
}

function renderinputcomment(i) {
  return `
<div class="inputcomment">
  <input type="text" placeholder="Kommentieren ..." id="commentinput${i}">
  <a onclick="addComment(${i})">Posten</a>
</div>
`;
}

function addComment(i) {
  let inputfield = document.getElementById(`commentinput${i}`);
  let input = inputfield.value;
  if (input == "") {
    alert("Bitte Kommentar eingeben");
  } else {
    let allcomments = posts[i].comment.comment;
    let accountname = posts[i].comment.accountname;
    allcomments.push(input);
    accountname.push("User");
    inputfield.value = "";
    let commentsection = document.getElementById(`commentSection${i}`);
    let amount = allcomments.length - 1;
    commentsection.innerHTML += `<div class="comment" id="comment${amount}">
    <div class="bold">${accountname[amount]}</div>
    <div class="textcomment">${allcomments[amount]}</div>
    <img src="./icons/heart.png" alt="">
    </div>`;
    save(i);
  }
}

function save(i) {
  let lastcomment = JSON.stringify(posts[i].comment.comment);
  let lastAccountname = JSON.stringify(posts[i].comment.accountname);
  let isliked = JSON.stringify(posts[i]["isliked"]);
  let likecount = JSON.stringify(posts[i]["like"]);
  localStorage.setItem(`comment${i}`, lastcomment);
  localStorage.setItem(`accountname${i}`, lastAccountname);
  localStorage.setItem(`isliked${i}`, isliked);
  localStorage.setItem(`likes${i}`, likecount)
}

function load(x) {
  let comments = localStorage.getItem(`comment${x}`);
  let accountnames = localStorage.getItem(`accountname${x}`);
  let isliked = localStorage.getItem(`isliked${x}`);
  let likecount = localStorage.getItem(`likes${x}`)

  if (comments && accountnames && isliked) {
    let parsedisiliked = JSON.parse(isliked);
    let parsedComments = JSON.parse(comments);
    let parsedAccountnames = JSON.parse(accountnames);
    let parsedLikes = JSON.parse(likecount)

    posts[x]["like"] = parsedLikes;
    posts[x]["isliked"] = parsedisiliked;
    posts[x].comment.comment = parsedComments;
    posts[x].comment.accountname = parsedAccountnames;
  }
}

function like(i) {
  let like = document.getElementById(`like${i}`);
  let redlike = document.getElementById(`redlike${i}`);
  let likecount = posts[i]["like"];
  let isliked = posts[i]["isliked"];

  if (!isliked) {
    like.classList.add("d-none");
    redlike.classList.remove("d-none");
    likecount++;
    posts[i]["like"] = likecount;
    document.getElementById(
      `renderlikes${i}`
    ).innerHTML = `Gefällt ${likecount.toLocaleString("de-DE")}`;
    posts[i]["isliked"] = true;
  } else {
    like.classList.remove("d-none");
    redlike.classList.add("d-none");
    likecount--;
    posts[i]["like"] = likecount;
    document.getElementById(
      `renderlikes${i}`
    ).innerHTML = `Gefällt ${likecount.toLocaleString("de-DE")}`;
    posts[i]["isliked"] = false;
  }
  save(i);
}

