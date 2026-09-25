document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav, .site-nav");

    if (menu && nav) {
        menu.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    const filters = document.querySelectorAll(".filter[data-filter], .filter-button[data-filter]");
    const cards = document.querySelectorAll("[data-category]");

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            filters.forEach((item) => item.classList.remove("active"));
            filter.classList.add("active");

            const value = filter.dataset.filter;

            cards.forEach((card) => {
                card.style.display =
                    value === "all" || card.dataset.category === value ? "" : "none";
            });
        });
    });
});
