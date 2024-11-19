
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.navbar ul');
        const dropdownToggle = document.querySelector('.main-list[href=""]'); // Link for dropdown
    
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    
        // Toggle dropdown on mobile when "Ways To Help" is clicked
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the default link behavior
            const dropdownMenu = dropdownToggle.nextElementSibling;
            dropdownMenu.classList.toggle('show-dropdown');
        });
    