console.log('holvfggfga');
let slider = document.querySelector('.section'),
    container = document.querySelector('#container'),
    nav = document.querySelectorAll('ul a'),
    add = document.querySelector('#btn'),
    slider_width = slider.scrollWidth;
    blog = document.querySelector('.part_1').scrollWidth;

add.addEventListener('click', scrollEffect)

window.onclick=function(event){
    // alert('you clicked');
    console.log((event.target == nav[1] || this.event.target.parentNode == nav[1]))

    if((event.target == nav[0] || this.event.target.parentNode == nav[0]))
      {      
        
          nav[1].classList.remove('active');
          nav[2].classList.remove('active');
           nav[0].classList.add('active');

           container.scrollTo({top:0,left:0,behavior:"smooth"});
      } 

    if((event.target == nav[1] || this.event.target.parentNode == nav[1]))
      {       
          nav[0].classList.remove('active');
          nav[2].classList.remove('active');
          nav[1].classList.add('active');

          container.scrollTo({top:0,left:blog,behavior:"smooth"});
      } 

      if((event.target == nav[2] || this.event.target.parentNode == nav[2]))
      {
        nav[0].classList.remove('active');
        nav[1].classList.remove('active');
        nav[2].classList.add('active');
        
        container.scrollTo({top:0,left:blog*2,behavior:"smooth"});
      } 
     
}
console.log(nav)

container.scrollTo(0,0)
function scrollEffect(){
    console.log('about to scroll')
    container.scrollTo({top:0,left:blog*2,behavior:"smooth"})

    container.onscroll=function(event){
        console.log('scrolling')
        console.log(event)
       //container.scrollTo({top:0,left:blog*2,behavior:"smooth"}) 
    }

}


//console.log("combined: "+ slider.scrollWidth + "  single: " + blog.scrollWidth);