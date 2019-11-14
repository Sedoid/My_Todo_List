
let slider = document.querySelector('.section'),
    container = document.querySelector('#container'),
    set = document.querySelector('.create')
    cancel = document.querySelector('.cancel')
    nav = document.querySelectorAll('ul a'),
    add = document.querySelector('#btn'),
    slider_width = slider.scrollWidth;
    blog = document.querySelector('.part_1').scrollWidth;  
   
    
// scrollEffect(); 

window.onclick  = function(event){

    if((event.target == nav[0] || this.event.target.parentNode == nav[0] || container.scrollLeft < 200))
      {      
  
          nav[1].classList.remove('activee');
          nav[2].classList.remove('activee');
           nav[0].classList.add('activee');

           container.scrollTo({top:0,left:0,behavior:"smooth"});
      } 

    if((event.target == nav[1] || this.event.target.parentNode == nav[1]))
      {       
          nav[0].classList.remove('activee');
          nav[2].classList.remove('activee');
          nav[1].classList.add('activee');

          container.scrollTo({top:0,left:blog,behavior:"smooth"});

      } 

      if((event.target == nav[2] || this.event.target.parentNode == nav[2]))
      {
        
        nav[0].classList.remove('activee');
        nav[1].classList.remove('activee');
        nav[2].classList.add('activee');

        container.scrollTo({top:0,left:blog*2,behavior:"smooth"});

      } 
     
      if(event.toElement.innerHTML == 'add'){
        document.querySelector('#btn').style.display = "none";
        let view = document.querySelector('.add');

          view.classList.add('add_item');
          view.classList.remove('slideOutDown');
          view.classList.add('animated');
          view.classList.add('slideInUp');

          setTimeout(function(){
           // alert('here')
            document.querySelector('header ul').style.display = "none";
          
         },540);
           
      }
    
}

container.addEventListener('scroll',function(){

 let  blog = document.querySelector('.part_1').scrollWidth; 
  //console.log(blog +" and "+ this.scrollLeft)

  if(this.scrollLeft < blog)
  {      
      console.log('hello');
      nav[1].classList.remove('activee');
      nav[2].classList.remove('activee');
       nav[0].classList.add('activee');
      
     //  container.scrollTo({top:0,left:0,behavior:"smooth"});
  } 

if(this.scrollLeft >= blog && this.scrollLeft<blog*2)
  {       
    console.log('hola')
      nav[0].classList.remove('activee');
      nav[2].classList.remove('activee');
      nav[1].classList.add('activee');
  
  //    this.scrollTo({top:0,left:411,behavior:"smooth"});
  } 

  if(this.scrollLeft == blog*2)
  {  
    console.log('hiya')
    nav[0].classList.remove('activee');
    nav[1].classList.remove('activee');
    nav[2].classList.add('activee');

  //  container.scrollTo({top:0,left:blog*2,behavior:"smooth"});

  } 

}) 

set.addEventListener('click', slideDown)
cancel.addEventListener('click', slideDown)

function slideDown(){
  let view = document.querySelector('.add');

  view.classList.add('add_item');
  view.classList.remove('slideInUp');
  view.classList.add('animated');
  view.classList.add('slideOutDown');

  setTimeout(function(){
    document.querySelector('header ul').style.display = "inline-block";
    document.querySelector('#btn').style.display = "inline-block";
  },150);
}