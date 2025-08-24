// Mobile menu toggle
document.getElementById("mobileMenuButton").onclick = function () {
    document.getElementById("mobileMenu").classList.toggle("hidden");
};

// Loader
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
        }, 500);
    }, 1000);
});

// Back to top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Countdown timer
function updateCountdown() {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3); // 3 days from now

    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days
            .toString()
            .padStart(2, "0");
        document.getElementById("hours").innerHTML = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("minutes").innerHTML = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds
            .toString()
            .padStart(2, "0");

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);
}

updateCountdown();

// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cartCount");
let cartItems = 0;

addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
        cartItems++;
        cartCount.textContent = cartItems;
        cartCount.classList.remove("hidden");

        // Animation effect
        button.innerHTML = '<i class="fas fa-check mr-2"></i>Added';
        button.classList.add("bg-green-600");

        setTimeout(function () {
            button.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i>Add to Cart';
            button.classList.remove("bg-green-600");
        }, 2000);
    });
});
