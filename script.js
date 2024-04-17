const allVideos = document.querySelectorAll("video");
const sidebar = document.querySelector(".left-section");
const sidebarItems = document.querySelectorAll(".sidebar .item");
const catItems = document.querySelectorAll(".categories a");

// play e pause video com mouse

allVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

// abrir e fechar sidebar

sidebarItems.forEach((sideItem) => {
  sideItem.addEventListener("click", () => {
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
    });
    sideItem.classList.add("active");
  });
});

// Categoria click
catItems.forEach((catItem) => {
  catItem.addEventListener("click", () => {
    catItems.forEach((item) => {
      item.classList.remove("active");
    });
    catItem.classList.add("active");
  });
});

// Mover sidebar em devices pequeno scroll
window.addEventListener("scroll", () => {
  if (window.innerWidth <= 992) {
    if (this.pageYOffset > 20) {
      sidebar.style.paddingTop = "20px";
    } else {
      sidebar.style.paddingTop = "70px";
    }
  }
});
