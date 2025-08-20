import { setupNavigation } from "./navigation";
import { footerSection } from "./home";

export function createMenuPage() {
    setupNavigation();

    const menuInfo = document.createElement("section");
    menuInfo.classList.add("menu-info");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu & Most Popular Dishes";

    // const paragraph = document.createElement("p");
    // paragraph.textContent = "Experience the best dining with us.";
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const dishes = [
        {
            name: "Margherita Pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
            description: "Classic pizza with fresh mozzarella, tomatoes, and basil."
        },
        {
            name: "Spaghetti Carbonara",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
            description: "Traditional Italian pasta with pancetta, egg, and parmesan."
        },
        {
            name: "Caesar Salad",
            image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=400&q=80",
            description: "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing."
        },
        {
            name: "Grilled Salmon",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
            description: "Fresh salmon fillet grilled to perfection, served with vegetables."
        }
        ,
        {
            name: "Chicken Alfredo",
            image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80",
            description: "Creamy Alfredo sauce tossed with fettuccine and grilled chicken."
        },
        {
            name: "Beef Tacos",
            image: "https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?auto=format&fit=crop&w=400&q=80",
            description: "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa."
        },
        {
            name: "Vegetable Stir Fry",
            image: "https://images.unsplash.com/photo-1599297915779-0dadbd376d49?auto=format&fit=crop&w=400&q=80",
            description: "Fresh vegetables sautéed in a savory sauce, served with steamed rice."
        },
        {
            name: "Chocolate Lava Cake",
            image: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?auto=format&fit=crop&w=400&q=80",
            description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."
        }
    ];

    dishes.forEach(dish => {
        const item = document.createElement("li");
        item.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = dish.image;
        img.alt = dish.name;
        img.classList.add("menu-img");

        const dishName = document.createElement("h2");
        dishName.textContent = dish.name;

        const dishDesc = document.createElement("p");
        dishDesc.textContent = dish.description;

        item.appendChild(img);
        item.appendChild(dishName);
        item.appendChild(dishDesc);

        menuList.appendChild(item);
    });

    

    menuInfo.appendChild(heading);
    menuInfo.appendChild(menuList);
  
    document.body.appendChild(menuInfo);
    document.body.appendChild(footerSection());
}