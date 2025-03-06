window.addEventListener("load", hide_preloader);

function hide_preloader() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("nav").style.position = "fixed";
}
document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
  document.querySelector(".video_conatainer").classList.toggle("None");
  document.querySelector(".hero_sec").classList.toggle("None");
}
