<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="skills.html">Skills</a>
  <a href="contact.html">Contact</a>
</nav>
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your message, Dipendra!");
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

/*Dark Theme*/

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});


const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  serviceCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
  skillCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});