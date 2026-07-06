const topBtn = document.getElementById("topBtn");
const bottomBtn = document.getElementById("bottomBtn");

window.addEventListener("scroll", function () {

    // Show/Hide Top Button
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    // Show/Hide Bottom Button
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition < pageHeight - 300) {
        bottomBtn.style.display = "block";
    } else {
        bottomBtn.style.display = "none";
    }
});

// Scroll to Top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll to Bottom
bottomBtn.addEventListener("click", function () {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
});