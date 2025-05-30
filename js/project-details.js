// Get project ID from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

// Find project by ID
const project = projects.find(p => p.id === projectId);

if (project) {
    // Populate project details
    document.getElementById("main-image").src = project.mainImage;
    document.getElementById("main-image").alt = project.title;
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("gallery-image-1").src = project.gallery[0];
    document.getElementById("gallery-image-2").src = project.gallery[1];
    document.getElementById("gallery-image-3").src = project.gallery[2];
    document.getElementById("gallery-image-4").src = project.gallery[3];
} else {
    // Fallback if project not found
    document.getElementById("project-title").textContent = "Project Not Found";
    document.getElementById("project-description").textContent = "The requested project could not be found.";
}

// Modal functionality
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}