/* PRE-LOADER FUNCTIONALITY*/
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader_sec");
  preloader.classList.remove("hidden");
  preloader.classList.add("preloader");

  void preloader.offsetWidth;

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 100);
});

/*  */

const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const menu = document.querySelector(".dropdown_menu");
const menuLists = document.querySelectorAll(".menu_lists li");

/* TEAM SECTION */
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

/* NAV-FUNCTIONS */

/* ACTIVE LINKS */
const removeActive = () => {
  menuLists.forEach((link) => {
    link.classList.remove("active");
  });
};

menuLists.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
  });
});

toogleBtn.onclick = () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");

  toogleBtnIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars";
};

const isClose = () => {
  const isClose = menu.classList.remove("open");

  toogleBtnIcon.classList = isClose ? "fa fa-times" : "fa fa-bars";
};

document.onclick = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

const video = document.getElementById("intro-video");
const textSection = document.getElementById("text-section");
const formSection = document.getElementById("form-section");
const enterButton = document.getElementById("enter-button");
const cancelButton = document.getElementById("cancel-button");
const container = document.getElementById("container-sec");
const submitButton = document.getElementById("submit-button");

// Play video and loop it indefinitely
video.loop = true;
video.play();

// Show the form when "Enter Details" button is clicked
enterButton.onclick = () => {
  textSection.style.display = "none";
  formSection.style.display = "flex";
};

// Hide the form and go back to text section when "Cancel" button is clicked
cancelButton.onclick = () => {
  formSection.style.display = "none";
  textSection.style.display = "flex";
};

// Hide container and reset view after form submission
submitButton.onclick = () => {
  // formSection.style.display = "none";
  // textSection.style.display = "flex";
};
