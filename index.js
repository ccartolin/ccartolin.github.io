document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        sections.forEach(section => {
            section.style.display = 'none'
        });
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});



