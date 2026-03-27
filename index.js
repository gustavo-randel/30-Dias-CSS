const links = document.querySelectorAll('.links');

links.forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.classList.add('incompleted');
    }
});