window.addEventListener("load", hide_preloader);

function hide_preloader() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("nav").style.position = "fixed";
}
document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
  document.querySelector(".video_conatainer").style.display = "none";
  document.querySelector(".hero_sec").style.display = "none";
}