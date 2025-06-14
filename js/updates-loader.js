document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectId = parseInt(card.getAttribute('href').split('=')[1]);

        const project = projects.find(p => p.id === projectId);

        if (project) {
            const imgElement = card.querySelector('img');
            imgElement.src = project.mainImage;
            imgElement.alt = project.title;

            const projectInfo = card.querySelector('.project-info');
            projectInfo.querySelector('h3').textContent = project.title;
            projectInfo.querySelector('p').textContent = `${project.role} | ${project.date}`;
        }
    });


});


