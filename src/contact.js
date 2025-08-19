import { setupNavigation } from "./navigation";
import { footerSection } from "./home";

export function createContactPage() {
    setupNavigation()

    const contactForm = document.createElement("section");
    contactForm.classList.add("contact-form")

    const input = document.createElement("input");
    input.classList.add("input")

    contactForm.appendChild(input);

    document.body.append(contactForm);
    document.body.append(footerSection());
}


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