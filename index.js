// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    changeText()
    console.log("The DOM has loaded");
  });

  function changeText() {
document.getElementById("text").textContent = "This is really cool!";
  }
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );