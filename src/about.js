import { setupNavigation } from "./navigation";
import { footerSection } from "./home";

export function createAboutPage() {
    setupNavigation();

    const aboutInfo = document.createElement("section");
    aboutInfo.classList.add("about-page");

    const introAbout = document.createElement("div");
    introAbout.classList.add("about-intro")

    const introText = document.createElement("div");
    introText.classList.add("intro-text");

    const introHeading = document.createElement("h1");
    introHeading.textContent = "A Taste of Tradition, A Touch of Home";

    const introPara = document.createElement("p");
    introPara.textContent = "Welcome to Golden Spoon Restaurant, where every dish tells a story. We believe food is more than just a meal—it’s an experience that brings people together. From carefully sourced ingredients to recipes passed down through generations, our passion is to serve you flavors that feel like home.";

    const intorImg = document.createElement("img");
    intorImg.src = "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    introText.appendChild(introHeading)
    introText.appendChild(introPara)
    introAbout.appendChild(introText)
    introAbout.appendChild(intorImg)

    const storyAbout = document.createElement("div");
    storyAbout.classList.add("about-story")

    const storyHeading = document.createElement("h2");
    storyHeading.textContent = "Our Story";

    const storyPara = document.createElement("p");
    storyPara.innerHTML = "Founded in 2020, Golden Spoon was born out of a love for cooking and sharing meals with friends and family. Our founder, inspired by childhood memories of cooking with grandparents, set out to create a restaurant that feels like home. Every dish is crafted with care, using recipes that celebrate our heritage and the joy of gathering around the table.";
    storyPara.innerHTML += "<br><br>We invite you to join us and become part of our story—one delicious bite at a time.";

    storyAbout.appendChild(storyHeading);
    storyAbout.appendChild(storyPara);

    const valueAbout = document.createElement("div");
    valueAbout.classList.add("about-value")

    const valueHeading = document.createElement("h2");
    valueHeading.textContent = "Our Values";

    const valueList = document.createElement("ul");
    const listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Fresh Ingredients</strong> – We partner with local farmers and trusted suppliers.";
    const listItem2 = document.createElement("li");
    listItem2.innerHTML = "<strong>Authenticity</strong> – Every dish is prepared with care, honoring our roots."
    const listItem3 = document.createElement("li");
    listItem3.innerHTML = "<strong>Community</strong> – Our restaurant is more than a place to eat—it’s a place to connect."
    const listItem4 = document.createElement("li");
    listItem4.innerHTML = "<strong>Hospitality</strong> – Warm smiles and great service are always on the menu."

    valueList.appendChild(listItem)
    valueList.appendChild(listItem2)
    valueList.appendChild(listItem3)
    valueList.appendChild(listItem4)

    valueAbout.appendChild(valueHeading)
    valueAbout.appendChild(valueList)


    // aboutInfo.appendChild(introHeading)
    aboutInfo.appendChild(introAbout);
    aboutInfo.appendChild(storyAbout);
    aboutInfo.appendChild(valueAbout)

    document.body.appendChild(aboutInfo);
    document.body.appendChild(footerSection());
}
