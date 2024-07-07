

function render() {
  let refList = document.getElementsByClassName("red_box")
  for (let index = 0; index < refList.length; index++) {
    const singleRef = refList[index];
    singleRef.innerText = index;
  }
}
