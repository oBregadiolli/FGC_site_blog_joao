document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");
        const icon = item.querySelector(".accordion-icon");

        title.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");

            // Fecha todos os outros accordions (comportamento exclusivo)
            accordionItems.forEach((otherItem) => {
                otherItem.classList.remove("open");
                otherItem.querySelector(".accordion-content").style.maxHeight = null;
                otherItem.querySelector(".accordion-icon").textContent = "add";
            });

            if (!isOpen) {
                item.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "remove";
            } else {
                item.classList.remove("open");
                content.style.maxHeight = null;
                icon.textContent = "add";
            }
        });
    });
});
