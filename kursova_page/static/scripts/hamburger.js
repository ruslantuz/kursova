const iconMenu = document.getElementById('iconMenu')
const navigation = document.getElementById('navigation')
const heroWrap = document.getElementById('heroWrap')

iconMenu.addEventListener('click', ()=> {
	navigation.classList.toggle('hide');
    heroWrap.classList.toggle('menu-space');
})
function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}

