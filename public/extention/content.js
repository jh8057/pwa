let target = document.querySelector("body");

target.addEventListener("click", (e) => {
  console.log("click", e);
  //   target.style.backgroundColor = "red";
  //   console.log("x", e.x);
  //   console.log("y", e.y);

  //   let circle = document.createElement("span");
  //   circle.className = "mouseCircle";
  //   circle.style.backgroundColor = "green";
  //   circle.style.left = e.x;
  //   circle.style.top = e.y;
  //   circle.style.width = "50px";
  //   circle.style.height = "50px";
  //   document.body.appendChild(circle);
});

// contentscript.js
chrome.runtime.sendMessage({ action: "FINISH" }, function (response) {
  console.log("response", response);
});
