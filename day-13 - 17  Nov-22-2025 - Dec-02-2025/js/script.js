const mbi = document.getElementById('mbi');
const navLinks = document.getElementById('nav-links');

mbi.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
