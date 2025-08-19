import { setupNavigation } from "./navigation";
import { footerSection } from "./home";

export function createMenuPage() {
setupNavigation();
    
        const aboutInfo = document.createElement("section");
        aboutInfo.classList.add("about-info");
    
        const heading = document.createElement("h1");
        heading.textContent = "Menu";
    
        const paragraph = document.createElement("p");
        paragraph.textContent = "Experience the best dining with us.";
    
        
    
        // mainInfo.appendChild(nav);
        aboutInfo.appendChild(heading);
        aboutInfo.appendChild(paragraph);
        // mainInfo.appendChild(img);
    
    
        document.body.appendChild(aboutInfo);
        document.body.appendChild(footerSection());
}