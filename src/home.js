import { setupNavigation } from "./navigation";
import { clearBody } from "./navigation";
import { createMenuPage } from "./menu";
import homeImg from "../assets/pizza.jpg"


export function createHomePage() {
    // const nav = document.querySelector("nav");
    setupNavigation();


    const mainInfo = document.createElement("section");
    mainInfo.classList.add("main-info");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Spoon Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Delicious flavors, served fresh every day.";

    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("hero-para2")
    paragraph2.textContent = "Welcome to Golden Spoon, where authentic recipes meet a cozy atmosphere. Come for the food, stay for the experience."

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "View Menu";
    menuBtn.addEventListener("click", () => {
        clearBody();
        createMenuPage();
    })


    const heroImg = document.createElement("div");
    heroImg.classList.add("hero-img");



    const img = document.createElement("img");
    img.src = homeImg;

    aboutSection();

    heroText.appendChild(heading);
    heroText.appendChild(paragraph);
    heroText.appendChild(paragraph2)
    heroText.appendChild(menuBtn)
    
    heroImg.appendChild(img);


    mainInfo.appendChild(heroImg);
    mainInfo.appendChild(heroText);
    


    document.body.appendChild(mainInfo);
    document.body.appendChild(aboutSection());
    document.body.appendChild(menuSection());
    document.body.appendChild(testimonySec());
    document.body.appendChild(contactSection());
    document.body.appendChild(footerSection());
}

function aboutSection(){
    const aboutSec = document.createElement("section");
    aboutSec.classList.add("about-sec");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Story"

    const paragraph = document.createElement("p");
    paragraph.textContent = "At Golden Spoon, we believe food is more than just a meal — it’s an experience. Inspired by family traditions and fresh ingredients, we bring you dishes crafted with love and passion."

    aboutSec.appendChild(h1);
    aboutSec.appendChild(paragraph)
    return aboutSec;
}

function menuSection (){
    const menuSec = document.createElement("section");
    menuSec.classList.add("menu-sec");

    const h1 = document.createElement("h1");
    h1.textContent = "Customer Favorites"

    const paragraph = document.createElement("p");
    paragraph.textContent = "Explore our most popular dishes, crafted with the finest ingredients and a touch of love."

    menuSec.appendChild(h1);
    menuSec.appendChild(paragraph);
    return menuSec;
}

function testimonySec () {
    const testSec = document.createElement("section");
    testSec.classList.add("test-sec");

    const h1 = document.createElement("h1");
    h1.textContent = "What Our Guests Say";

    const testList = document.createElement("ul");
    const listItem = document.createElement("li");
    listItem.textContent = "⭐⭐⭐⭐⭐ The food is incredible! I felt at home the moment I walked in.";
    const listItem2 = document.createElement("li");
    listItem2.textContent = "⭐⭐⭐⭐⭐ A hidden gem! The ambiance is perfect for a cozy dinner.";
    const listItem3 = document.createElement("li");
    listItem3.textContent = "⭐⭐⭐⭐⭐ I can't recommend this place enough! The service was outstanding.";
    testList.appendChild(listItem);
    testList.appendChild(listItem2);
    testList.appendChild(listItem3);

    testSec.appendChild(h1);
    testSec.appendChild(testList);
    return testSec;
}

// Helper function to create form fields
function createFormField(type, name, placeholder) {
    let fieldWrapper = document.createElement("div");
    fieldWrapper.classList.add("form-field");

    let input;
    if (type === "textarea") {
        input = document.createElement("textarea");
        input.name = name;
        input.placeholder = placeholder;
    } else {
        input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
    }
    fieldWrapper.appendChild(input);
    return fieldWrapper;
}

function contactSection() {
    const contactSec = document.createElement("section");
    contactSec.classList.add("contact-sec");

    const h1 = document.createElement("h1");
    h1.textContent = "Reserve Your Table";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Book online or call us at +233 123 456 789. We can’t wait to serve you!";

    // Form fields: Name, Date, Time, Guests, Message.
    const form = document.createElement("form");

    const nameField = createFormField("text", "name", "Your Name");
    const dateField = createFormField("date", "date", "Reservation Date");
    const timeField = createFormField("time", "time", "Reservation Time");
    const guestsField = createFormField("number", "guests", "Number of Guests");
    const messageField = createFormField("textarea", "message", "Special Requests");

    form.appendChild(nameField);
    form.appendChild(dateField);
    form.appendChild(timeField);
    form.appendChild(guestsField);
    form.appendChild(messageField);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Reserve";
    form.appendChild(submitBtn);

    contactSec.appendChild(h1);
    contactSec.appendChild(paragraph);
    contactSec.appendChild(form);   
    return contactSec;
}


export function footerSection() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const p = document.createElement("p");
    p.textContent = "© 2025 Golden Spoon. All rights reserved.";

    footer.appendChild(p);
    return footer;
}