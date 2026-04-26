const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.removeItem("theme");
    }

});