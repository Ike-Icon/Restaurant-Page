import { setupNavigation } from "./navigation";
import { footerSection } from "./home";

export function createAboutPage() {
    setupNavigation();
    
        const aboutInfo = document.createElement("section");
        aboutInfo.classList.add("about-info");
    
        const heading = document.createElement("h1");
        heading.textContent = "About us";
    
        const paragraph = document.createElement("p");
        paragraph.textContent = "Experience the best dining with us.";
    
        // const img = document.createElement("img");
        // img.src = "https://images.pexels.com/photos/1439177/pexels-photo-1439177.jpeg";
    
        // mainInfo.appendChild(nav);
        aboutInfo.appendChild(heading);
        aboutInfo.appendChild(paragraph);
        // mainInfo.appendChild(img);
    
    
        document.body.appendChild(aboutInfo);
        document.body.appendChild(footerSection());
}
