// انتظر حتى تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // احصل على كل بطاقات المشاريع
    const projectCards = document.querySelectorAll('.project-card');
    
    // لكل بطاقة مشروع:
    projectCards.forEach(card => {
        // استخرج الـ ID من الرابط (مثال: template-of-projects.html?id=1 → id=1)
        const projectId = parseInt(card.getAttribute('href').split('=')[1]);
        
        // ابحث عن المشروع المطابق في مصفوفة projects
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            // استبدل الصورة بـ mainImage
            const imgElement = card.querySelector('img');
            imgElement.src = project.mainImage;
            imgElement.alt = project.title; // تحديث النص البديل
            
            // (اختياري) تحديث العنوان والموقع إذا أردت
            const projectInfo = card.querySelector('.project-info');
            projectInfo.querySelector('h3').textContent = project.title;
            projectInfo.querySelector('p').textContent = `${project.role} | ${project.date}`;
        }
    });

    
});


