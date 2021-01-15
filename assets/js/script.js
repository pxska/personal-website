let navigationContainer = document.getElementById("nav-list");
let navigationLinks = navigationContainer.getElementsByClassName("nav-anchor");

for (let index = 0; index < navigationLinks.length; index++) {
    navigationLinks[index].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}