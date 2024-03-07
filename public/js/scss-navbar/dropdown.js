// When clicking 'models', bootstrap show a class 'show' to the dropdown-menu


// This to show the dropdown menu when hover over the dropdown
(function () {
    // set up variables for the dropdown, also setup empty array so we dont run into errors, build smtg without any dropdown
    const megaMenuToggles = document.querySelectorAll('.nav-item.dropdown') || [];

    function showMenu(event) {
    //set up two variable, one dropdown, one dropdown menu
    //We can use event.target here.
        const dropdown = event.target.querySelector('.dropdown-menu');
        const dropdownMenu = event.target.querySelector('.dropdown-toggle');

        if(dropdown && dropdownMenu){
            dropdown.classList.add('show');
            dropdownMenu.setAttribute('aria-expanded', 'true');
            dropdownMenu.classList.add('show');
        }
    }

    function hideMenu(event) {
        const dropdown = event.target.querySelector('.dropdown-menu');
        const dropdownMenu = event.target.querySelector('.dropdown-toggle');

        if(dropdown && dropdownMenu){
            dropdown.classList.remove('show');
            dropdownMenu.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('show');
        }
    }


    // pass in individual toggle
    megaMenuToggles.forEach((toggle) => {
        toggle.addEventListener('mouseenter', (event) => {
            showMenu(event);
        });

        toggle.addEventListener('mouseleave', (event) => {
            hideMenu(event);
        });
    });

})();