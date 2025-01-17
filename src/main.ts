


const menuItems = document.querySelectorAll('.menu-item--dropdown');
const subMenus = document.querySelectorAll('.menu__submenu');


function showSubmenu(index: number) {
    subMenus.forEach((submenu, i) => {
        if (i === index) {
            submenu.style.display = 'block'; 
        } else {
            submenu.style.display = 'none';   
        }
    });
}

menuItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        showSubmenu(index);  
    });

    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!item.matches(':hover') && !subMenus[index].matches(':hover')) {
                subMenus[index].style.display = 'none'; 
            }
        }, 300);  
    });
});

subMenus.forEach((submenu) => {
    submenu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!submenu.matches(':hover') && !menuItems[parseInt(submenu.getAttribute('data-submenu') || '0')].matches(':hover')) {
                submenu.style.display = 'none';
            }
        }, 300);
    });
});
