const audio = new Audio();
audio.src = "./0804(1).MP3";

function changeicon() {
    var icon = document.getElementById("favicon");
    icon.rel = "shortcut icon"
    icon.href = "img/del.webp"
    document.getElementsByTagName('head')[0].appendChild(icon);
};

let button = document.querySelector('.cont');
let circle = document.querySelector('.cir');
let all = document.querySelector('.all');
let span = document.querySelector('.spn');
let link = document.querySelector('.link');

button.addEventListener('click', function(){
    button.classList.toggle('cont-new')
    circle.classList.toggle('cir-new')
    all.classList.toggle('all-new')
    span.classList.toggle('spn-new')
    link.classList.toggle('link-new')
});