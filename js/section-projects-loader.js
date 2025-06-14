/* Section Updates in home */
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.projects-card');

    projectCards.forEach(card => {
        const projectId = parseInt(card.getAttribute('href').split('=')[1]);
        const project = projects.find(p => p.id === projectId);

        if (project) {
            const imgElement = card.querySelector('img');
            imgElement.src = project.mainImage;
            imgElement.alt = project.title;
            imgElement.setAttribute('draggable', 'false');

            const projectInfo = card.querySelector('.project-info');
            projectInfo.querySelector('h3').textContent = project.title;
            projectInfo.querySelector('p').textContent = `${project.role} | ${project.sector}`;
        }
    });


});
document.querySelectorAll('.projects-card img').forEach(img => {
    img.draggable = false;
    img.style.userDrag = 'none';
    img.style.webkitUserDrag = 'none';

    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
});