var loginModal = document.querySelector('#loginModal'),
    registerModal = document.querySelector('#registerModal'),
    loginBtn = document.querySelector('#loginBtn');
    signupBtn = document.querySelector('#signupBtn');
    
function x () {
    this.parentElement.parentElement.style.display = "none";
}

loginBtn.onclick = function () {
  loginModal.style.display = "block";
  closeBtn = loginModal.querySelector('.close-btn');
  closeBtn.onclick = x;
}

signupBtn.onclick = function () {
  registerModal.style.display = "block";
  closeBtn = registerModal.querySelector('.close-btn');
  closeBtn.onclick = x;
}

window.onclick = function (e) {
    if (e.target.className === 'modal-cont'){
        e.target.style.display = 'none';
    }
}