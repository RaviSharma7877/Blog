//https://63c7dcbc5c0760f69abfa6a2.mockapi.io/blog

const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active');
}