let target = document.querySelector("body");

target.addEventListener("click", (e) => {
  console.log("click");
  //   target.style.backgroundColor = "red";
  //   console.log("x", e.x);
  //   console.log("y", e.y);

  let circle = document.createElement("div");
  circle.className = "mouseCircle";
  circle.style.backgroundColor = "green";
  circle.style.left = e.x + "px";
  circle.style.top = e.y + "px";
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.position = "absolute";
  document.body.appendChild(circle);
  console.log(e.x, e.y);
});

// // contentscript.js
// chrome.runtime.sendMessage({ action: "FINISH" }, function (response) {
//   console.log("response", response);
// });
