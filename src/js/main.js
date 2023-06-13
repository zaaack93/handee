//header navigation trigger
const targetElement = document.querySelector(".blur-bg-header");
if(targetElement){
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    targetElement.classList.add("no-back-blur");
  } else {
    targetElement.classList.remove("no-back-blur");
  }
});
window.addEventListener("load", function () {
  if (window.scrollY === 0) {
    targetElement.classList.add("no-back-blur");
  } else {
    targetElement.classList.remove("no-back-blur");
  }
});
}