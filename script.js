window.addEventListener('DOMContentLoaded', setup);

function setup() {
    function showHideNav() {
        const navLinks = document.querySelectorAll('.nav-link'); 
        navLinks.forEach(navLink => {
            navLink.classList.add('fade-in');
        })

    }

    const burger = document.getElementById('burger'); 
    burger.addEventListener('click', showHideNav, false); 



}