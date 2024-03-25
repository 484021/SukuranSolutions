// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

//email form
const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

//public key
const publicKey = "KHugbW9nLiDrCSpXo";
const serviceId = "service_29xnzve";
const templateId = "template_2z1h1ll";

emailjs.init(publicKey);

//add event listener to contact form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.innerText = "Just a moment...";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceId, templateId, inputFields).then(
    () => {
      submitButton.innerText = "Message sent successfully";

      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
    }
  );
});

let templateParams = {
  name: "James",
  notes: "Check this out!",
};

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
  },
  (error) => {
    console.log("FAILED...", error);
  }
);
