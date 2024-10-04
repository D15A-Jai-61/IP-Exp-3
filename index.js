document.addEventListener('DOMContentLoaded', function() {
    const projectsBtn = document.getElementById('projectsBtn');
    const projectLinks = document.getElementById('projectLinks');
    const contactBtn = document.getElementById('contactBtn');
    const contactLinks = document.getElementById('contactLinks');

    projectsBtn.addEventListener('click', function() {
        projectLinks.style.display = projectLinks.style.display === 'none' ? 'block' : 'none';
    });

    contactBtn.addEventListener('click', function() {
        contactLinks.style.display = contactLinks.style.display === 'none' ? 'block' : 'none';
    });
});
