window.addEventListener('DOMContentLoaded', setup);

function setup() {


    function showHideNav() {
        const navLinks = document.querySelectorAll('.nav-link'); 
                
        navLinks.forEach(navLink => {
           const opacity = window.getComputedStyle(navLink).getPropertyValue("opacity");  
            
           if(opacity == 0) {
                navLink.classList.add('fade-in');
           } else {
            navLink.classList.remove('fade-in');
           }
        });

    }

    const burger = document.getElementById('burger'); 
    burger.addEventListener('click', showHideNav, false); 



}