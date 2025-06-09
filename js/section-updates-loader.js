/* Section Updates in home */
// انتظر حتى تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // احصل على كل بطاقات المشاريع
    const projectCards = document.querySelectorAll('.news-card');
    
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
            imgElement.setAttribute('draggable', 'false');
            
            // (اختياري) تحديث العنوان والموقع إذا أردت
            const projectInfo = card.querySelector('.news-info');
            projectInfo.querySelector('h3').textContent = project.title;
            projectInfo.querySelector('p').textContent = `${project.role} | ${project.date}`;
        }
    });

    
});
// لمنع السحب في الصور داخل .news-card
document.querySelectorAll('.news-card img').forEach(img => {
    img.draggable = false;
    img.style.userDrag = 'none';
    img.style.webkitUserDrag = 'none';
    
    // منع فتح الصورة في صفحة جديدة عند السحب
    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
});