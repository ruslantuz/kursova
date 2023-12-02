const iconMenu = document.getElementById('iconMenu')
const navigation = document.getElementById('navigation')
const heroWrap = document.getElementById('heroWrap')
const header = document.getElementById('headerId')

iconMenu.addEventListener('click', ()=> {
	navigation.classList.toggle('hide');
    // heroWrap.classList.toggle('menu-space');
    header.classList.toggle('burger-clicked');
    iconMenu.classList.toggle("active");
})

