// Make nav link active for each page
const navLink = document.querySelectorAll('.link');
const windowPathname = window.location.pathname;

navLink.forEach(navLink => {
    if (navLink.href.includes(windowPathname)) {
        navLink.classList.add('active');
    }
});