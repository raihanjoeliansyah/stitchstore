// ============================
// Navbar berubah saat scroll
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ============================
// Tombol Shop
// ============================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {

    document.querySelector("#product").scrollIntoView({
        behavior: "smooth"
    });

});

// ============================
// Animasi Fade Saat Scroll
// ============================

const elements = document.querySelectorAll(
    ".card,.about,.why-box div,.gallery-grid img"
);

elements.forEach(el => {

    el.classList.add("fade");

});

function reveal() {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ============================
// Efek klik tombol Buy Now
// ============================

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Produk berhasil ditambahkan ke keranjang! 🛒");

    });

});