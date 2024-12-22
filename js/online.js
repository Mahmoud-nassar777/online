let titel = document.querySelector('.titel');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.online){
        online()
    }else{
        offline()
    }
}
window.addEventListener("online", function(){
    online()
});
window.addEventListener("offline", function(){
    offline()
});

reload.onclick = function(){
    window.location.reload()
}

function online(){
    titel.innerHTML = 'Online Now';
    titel.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}
function offline(){
    titel.innerHTML = 'OFFline Now';
    titel.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}