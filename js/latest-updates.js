document.addEventListener("DOMContentLoaded", function () {
    const locationFilter = document.getElementById("location-filter");
    const dateFilter = document.getElementById("date-filter");
    const sectorFilter = document.getElementById("sector-filter");
    const projectCards = document.querySelectorAll(".project-card");

    function filterProjects() {
        const locationValue = locationFilter.value;
        const dateValue = dateFilter.value;
        const sectorValue = sectorFilter.value;

        projectCards.forEach(card => {
            const cardLocation = card.dataset.location;
            const cardDate = card.dataset.date;
            const cardSector = card.dataset.sector;

            const locationMatch = locationValue === "all" || cardLocation === locationValue;
            const dateMatch = dateValue === "all" || cardDate === dateValue;
            const sectorMatch = sectorValue === "all" || cardSector === sectorValue;

            if (locationMatch && dateMatch && sectorMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // إضافة Event Listeners للفلاتر
    locationFilter.addEventListener("change", filterProjects);
    dateFilter.addEventListener("change", filterProjects);
    sectorFilter.addEventListener("change", filterProjects);
});