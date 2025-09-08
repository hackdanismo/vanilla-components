const scrollButton = document.querySelector(".js-btn-scroll-to-top");

// Show scroll to top button after scrolling down the page to pixel value set
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Scroll smoothly up to the top of the page when button is clicked
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});