let posts = [
    {
      account: "9gag",
      accountimg: "./icons/9gag.png",
      image: "./img/human.jpg",
      descritpion: "Vision's greates enemy",
      location: "",
      like: 232344,
      comment: {
        accountname: ["erster", "zweite"],
        comment: ["asdasd asd asdas asdd asd sad", "asldk, ich der dies das"],
      },
    },
    {
      account: "marcosptorre.tattoo",
      accountimg: "./icons/tattoo2.png",
      image: "./img/dbz.jpg",
      descritpion: "DRAGON BALL Z ⚡️ In my style",
      location: "Lourdes",
      like: 1905343,
      comment: {
        accountname: "hans",
        comment: "asdasdyxcasedsad",
      },
    },
    {
      account: "benjatattoo_",
      accountimg: "./icons/tattoo1.png",
      image: "./img/hunterxhunter.jpg",
      descritpion: "Komugi vs Meruem in Gungi battle scene",
      location: "Vereinigtes Königreich",
      like: 503223,
      comment: {
        accountname: ["Peter", "jürgen"],
        comment: ["ayxcxycxycyx xyc yxcyx cyxcyx yxyxyxc", "test eins zwei"],
      },
    },
  ];
  
  function show() {
    let post = document.getElementById("posts");
  
    for (let i = 0; i < posts.length; i++) {
      const j = posts[i];
  
      post.innerHTML += `
      <div class="postcontainer" id="postnr${i}">
          ${renderHeader(j, i)}
          ${renderImage(j)}
          ${renderbelowImage()}
          ${renderDescriptionsection(j)}
          <div>
          ${rendercomment(i, j)}
          ${renderinputcomment()}
          </div>
          <div class="seperator"></div>
      </div>
      `;
    }
  }
  
  function renderHeader(j, i) {
    return `<div class="header">
              <img src="${j["accountimg"]}" alt="" id="accountimg${i}">
              <div class="postaccountname"><span class="accountname">${j["account"]}</span><br><span class="location">${j["location"]}</span></div>
              <img src="./icons/dots.png" alt="" id="dots">
          </div>`;
  }
  
  function renderImage(j) {
    return ` <div class="postimage">
              <img src="${j["image"]}">
          </div>`;
  }
  
  function renderbelowImage() {
    return `
    <div class="belowimage"> 
      <div class="leftside">
        <img src="./icons/heart.png" alt="">
        <img src="./icons/speech-bubble.png" alt="">
        <img src="./icons/send.png" alt="">
      </div>
      <img src="./icons/save.png" alt="">
    </div>`;
  }
  
  function renderDescriptionsection(j) {
    return `<div class="descritpionsection">
              <p>Gefällt ${j["like"].toLocaleString("de-DE")}</p>
              <p>${j["account"]} ${j["descritpion"]}</p>
          </div>
  `;
  }
  
  function rendercomment(i, j) {
    return `
  <div class="commentsection" id="commentsection">
    <div class="comment" id="comment${i}">
      ${test(j)}
      
    </div>
    <div class="test">
    <p>HIER</p>
    <p>hanspeter</p>
    </div>
    <img src="icons/heart.png" alt="">
  </div>
    `;
  }
  
  function renderinputcomment(i) {
    return `
  <div class="inputcomment">
    <input type="text" placeholder="Kommentieren ..." id="commentinput${i}">
    <a>Posten</a>
  </div>
  `;
  }
  
  function test(j) {
    let com = document.getElementById("commentsection");
    let leng = j["comment"].accountname.length;
  
    if (com) {
      for (let i = 0; i < leng; i++) {
        console.log(com)
        com.innerHTML += `
   <p class="bold">${j["comment"].accountname[i]}hier</p>
   <p>${j["comment"]["comment"]}</p>
   `;
      }
    }
  }
  