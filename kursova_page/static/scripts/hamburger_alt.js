const iconMenu = document.getElementById('iconMenu')
const navigation = document.getElementById('navigation')

iconMenu.addEventListener('click', ()=> {
	navigation.classList.toggle('hide');
})
function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}

