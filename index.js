document.addEventListener('DOMContentLoaded', (e) => {
    console.log("The DOM has loaded");
    const para = document.getElementById('text');
    para.innerHTML = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );