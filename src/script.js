const toggleNavButton = document.getElementById('toggleNav');
        const menuIcon = document.getElementById('menuIcon');
        const navMenu = document.getElementById('navMenu');

        toggleNavButton.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            if (menuIcon.classList.contains('menu')) {
                menuIcon.classList.remove('menu');
                menuIcon.classList.add('close');
            } else {
                menuIcon.classList.remove('close');
                menuIcon.classList.add('menu');
            }
        });