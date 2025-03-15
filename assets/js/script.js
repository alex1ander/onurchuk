document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".information-section");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -100px 0px" });

    blocks.forEach((block) => observer.observe(block));
});
