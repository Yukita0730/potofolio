// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Project hover effect
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "scale(1.05)";
    });
    project.addEventListener("mouseleave", () => {
        project.style.transform = "scale(1)";
    });
});

// Form validation alert
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
