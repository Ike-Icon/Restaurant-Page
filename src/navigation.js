import { createHomePage } from "./home.js";
import { createAboutPage } from "./about";
import { createContactPage } from "./contact";
import { createMenuPage } from "./menu.js";
// import { }
import logoImg from '../assets/logo-t.png';

export function clearBody() {
    const body = document.querySelector("body");
    do {
        body.removeChild(body.firstChild);
    }
    while (body.firstChild)
}



export function setupNavigation() {
    const myNav = document.createElement("div");
    myNav.classList.add("nav-bar")

    const nav = document.createElement("nav");
    nav.classList.add("navigation");

    const logo = document.createElement("img");
    logo.src = logoImg;
    logo.addEventListener("click", () => {
        clearBody();
        createHomePage();
    })

   const homeBtn = document.createElement("button");
   homeBtn.classList.add("home-btn");
   homeBtn.textContent = "Home";
   homeBtn.addEventListener("click", () => {
       clearBody();
       createHomePage();
   });
  

   const aboutBtn = document.createElement("button");
   aboutBtn.classList.add("about-btn");
   aboutBtn.textContent = "About";
   aboutBtn.addEventListener("click", () => {
       clearBody();
       createAboutPage();
   });

   const contactBtn = document.createElement("button");
   contactBtn.classList.add("contact-btn");
   contactBtn.textContent = "Contact";
   contactBtn.addEventListener("click", () => {
       clearBody();
       createContactPage();
   });

   const menuBtn = document.createElement("button");
   menuBtn.classList.add("menu-btn");
   menuBtn.textContent = "Menu";
   menuBtn.addEventListener("click", () => {
       clearBody();
       createMenuPage()
   });
   

   
   nav.appendChild(homeBtn);
   nav.appendChild(aboutBtn);
   nav.appendChild(contactBtn);
   nav.appendChild(menuBtn)

   myNav.appendChild(logo)
   myNav.appendChild(nav)

    document.body.appendChild(myNav);
}

