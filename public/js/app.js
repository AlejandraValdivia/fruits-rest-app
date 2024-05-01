/*==================== toggle icon navbar ====================*/
// let hamburgerMenuIcon = document.getElementById("menu-icon");
// let navigationBar = document.querySelector(".navbar");

// hamburgerMenuIcon.onclick = () => {
//   hamburgerMenuIcon.classList.toggle("bx-x");
//   hamburgerMenuIcon.classList.toggle("active");
//   navigationBar.classList.toggle("show");
// };

const hamburgerMenuIcon = document.getElementById("menu-icon");
const navigationBar = document.getElementById("nav-ul");

hamburgerMenuIcon.onclick = () => {
  hamburgerMenuIcon.classList.toggle("bx-x");
  navigationBar.classList.toggle("show");
};
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let stickyNavBar = document.querySelector("header");
stickyNavBar.classList.toggle("sticky", window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
hamburgerMenuIcon.classList.remove("bx-x");
navigationBar.classList.remove("active");

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Engineer", "Backend Engineer", "Fullstack Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// const navArray = ["home", "about", "services", "portfolio", "contact"];

// const header = document.createElement("header");
// const navbar = document.createElement("nav");
// const logo = document.createElement("a");
// const menuIcon = document.createElement("i");

// header.setAttribute("class", "header");
// header.append(logo, menuIcon, navbar);
// logo.textContent = "Portfolio";
// logo.setAttribute("class", "logo");
// menuIcon.setAttribute("class", "bx bx-menu");
// menuIcon.setAttribute("id", "menu-icon");
// navbar.setAttribute("class", "navbar");

// navArray.forEach((element) => {
//   const menuItem = document.createElement("a");

//   if (element === "home") {
//     menuItem.setAttribute("class", "active");
//   }

//   menuItem.setAttribute("href", element);
//   menuItem.textContent = element.slice(0, 1).toUpperCase() + element.slice(1);

//   navbar.appendChild(menuItem);
// });

// document.querySelector("body").appendChild(header);

// section
// const socialMediaArray = ["facebook", "twitter", "instagram", "linkedin"];

// const section = document.createElement("section");
// section.setAttribute("class", "home");
// section.setAttribute("id", "home");
// const homeContentDiv = document.createElement("div");
// homeContentDiv.setAttribute("class", "home-content");
// const h3Intro = document.createElement("h3");
// h3Intro.textContent = "Hello, It's Me";

// const h1Section = document.createElement("h1");
// h1Section.textContent = "Alejandra Valdivia";

// const h3P = document.createElement("h3");
// h3P.textContent = "And I'm a ";
// const spanH3 = document.createElement("span");
// spanH3.textContent = "Frontend Engineer";
// h3P.append(spanH3);
// const paragraph = document.createElement("p");
// paragraph.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum voluptatibus quo natus ire sint ex voluptatem.";

// const socialMediaDiv = document.createElement("div");
// socialMediaDiv.setAttribute("class", "social-media");

// socialMediaArray.forEach((element) => {
//   const socialMediaIcon = document.createElement("a");
//   socialMediaIcon.setAttribute("href", "#");

//   const icon = document.createElement("i");
//   icon.setAttribute("class", `bx bxl-${element}`);
//   socialMediaIcon.appendChild(icon);

//   socialMediaDiv.appendChild(socialMediaIcon);
// });

// const download = document.createElement("a");
// download.setAttribute("class", "btn");
// download.textContent = "Download CV";

// const homeImgDiv = document.createElement("div");
// homeImgDiv.setAttribute("class", "home-img");
// const profileImage = document.createElement("img");
// profileImage.setAttribute("src", "images/personal-portfolio-pic.png");
// homeImgDiv.appendChild(profileImage);

// homeContentDiv.append(
//   h3Intro,
//   h1Section,
//   h3P,
//   paragraph,
//   socialMediaDiv,
//   download
// );
// section.append(homeContentDiv, homeImgDiv);

// document.querySelector("body").appendChild(section);
