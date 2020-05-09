const menuBtn = document.querySelector('.toggler');
const showMenu = document.querySelector('.showmenu');
const links = document.querySelector('.showlink');
const showLinks = document.querySelectorAll('.showlinks > li');
const btn = document.querySelector('.btn');



menuBtn.addEventListener('click', function(){
    showMenu.classList.toggle('open');
    showLinks.forEach(item => item.classList.toggle('open'));
    btn.classList.toggle('open');
    console.log(showLinks);
});
