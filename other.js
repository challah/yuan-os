function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.querySelector(".time").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

document.body.onload = startTime();


const body = document.querySelector("body");
// body.addEventListener("click", yuanHead);
function yuanHead() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "yuan-head");

  let img = document.createElement("img");
  img.src = "images/yuan.png";
  img.setAttribute("class", "yuan-img");
  newDiv.appendChild(img);

  let yuannieHeadOffset = 68;
  let randomWidth =
    Math.floor(
      Math.random() * (window.innerWidth - yuannieHeadOffset - 0 + 1)
    ) + 0;
  let randomHeight =
    Math.floor(
      Math.random() * (window.innerHeight - yuannieHeadOffset - 0 + 1)
    ) + 0;
  newDiv.style.left = randomWidth + "px";
  newDiv.style.bottom = randomHeight + "px";

  const container = document.querySelector("body");
  container.appendChild(newDiv);
}

body.addEventListener("click", function (e) {
  if (e.target.className === "yuan-img") {
    console.log("eeeee!");
    body.removeChild(e.target.parentNode);
  } else if (e.target.className === "") {
    yuanHead();
    console.log(e.target.className);
  } else {
    console.log(e.target.className);
  }
});
