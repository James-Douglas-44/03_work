window.addEventListener('DOMContentLoaded', () => {

    // variables for tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    // Hiding inactive tabs
    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        // Removing active class
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

        // Displaying tabs
        function showTabContent(i = 0) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent();

        // eventListener delegation
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
});