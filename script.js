// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


// Open / close mobile navigation
if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        // Update accessibility state
        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close mobile menu after clicking a navigation link

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// =====================================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener("click", function (event) {

    if (!menuToggle || !navbar) return;

    const clickedInsideMenu =
        navbar.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


// =====================================================
// RESET MOBILE MENU WHEN WINDOW BECOMES DESKTOP SIZE
// =====================================================

window.addEventListener("resize", function () {

    if (!navbar || !menuToggle) return;


    if (window.innerWidth > 700) {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});