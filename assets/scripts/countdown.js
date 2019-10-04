// Returns the time from midnight Jan 1 1970 to a specified deadline in milliseconds
var deadline = new Date("dec 30, 2019 15:00:00").getTime();  


window.onload = function(){
    alert('countdown.js is here');
   

   setInterval(
       function(){
      if(t < 0){
        cleatInterval(x);
        this.document.getElementById('demo').innerHTML = 'EXPIRED';
    }else{
       
        // Returns the time from midnight jan 1 ao70 to the current time in  milliseconds
var now = new Date().getTime();   

// Compute the lenght of time from now the deadline in milliseconds 
var t = deadline-now;

// Compute the number of 24hours within that specified length of time
var days = Math.floor(t/(24*60*60*1000)); 

// Compute the number of hours which gone with the deadline day
// note that the dividend is used in order to remover
var hours = Math.floor(t%(1000*60*60*24)/(1000*60*60));
// Compute the number of minutes before the deadline
var minutes = Math.floor((t%(1000*60*60))/(1000*60));


var seconds = Math.floor((t%(1000*60)) / 1000);

 let root = document.getElementById('root');
    root.innerHTML =  
    '<div>  '+ days     +  'Day </div>  ' 
   + '<div>  '+ hours    + 'Hour </div>  ' 
   + '<div>  '+ minutes  + ' Min </div>  '
   + '<div>  '+ seconds  + 'sec </div>  ';
    }
}, 1000);

}