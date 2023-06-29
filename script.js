//https://63c7dcbc5c0760f69abfa6a2.mockapi.io/blog

const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active');
}

let icon1 = document.getElementById('icon');
icon1.onclick = function(){
    document.body.classList.toggle('darkthem');
    if(document.body.classList.contains('darkthem')){
        icon1.src = "/images/sun.png";
    }else{
        icon1.src = "/images/moon.png";
    }
}