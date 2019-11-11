console.log('holvfggfga');
let slider = document.getElementById('container');

window.onscroll = function(event){
    alert(event);
    console.log(event.target);
    // event.target.parentNode.removeClass='active';
}

document.querySelector('a').onclick = function(){
    alert('click event occured');
}

let slideri = document.querySelector('#container');
console.log(slideri)
slideri.onscoll = function(event){
    alert(scrolled + event);
}