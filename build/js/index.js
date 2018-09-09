import "../sass/index.sass";

const t = document.querySelector(".title");

document.addEventListener("scroll", function() {
  let tTop = t.getBoundingClientRect().top;
  console.log(tTop);
  if (tTop < -24 && t.classList.contains("visible")) {
    t.classList.remove("visible");
  }
  if (tTop > -24 && !t.classList.contains("visible")) {
    t.classList.add("visible");
  }
});
