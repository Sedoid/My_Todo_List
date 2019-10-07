//dynamically set the background color for
//root
//root div
//header
//footer

let x = 0;
let pending_tasks = 0;
let Ongoing_tasks = 0;
let colors =['#3498db','#8e44ad','#2c3e50','#40407a','#006266','#cc8e35','#b33939','#e1b12c','#192a56','#6D214F','#58B19F','#7f8c8d','#0652DD','#ED4C67','#2c2c54','#227093','#474787'];
// alert(Math.floor(Math.random()*18));
function setTimer (time_up,site){
  // alert(`lets walk together and the deadline is ${time_up}`);
  setInterval(
    function(){
      var now = new Date().getTime(); 
      var t = time_up-now;
   if(t < 0){
    
     clearInterval(this);
     document.querySelector(`.root${site}`).innerHTML =
      '<span style="color: red"> EXPIRED</span>';

    document.querySelector(`.completed${site}`).style.display="none";
 }else{
    
     // Returns the time from midnight jan 1 ao70 to the current time in  milliseconds
  

// Compute the lenght of time from now the deadline in milliseconds 


// Compute the number of 24hours within that specified length of time
var days = Math.floor(t/(24*60*60*1000)); 

// Compute the number of hours which gone with the deadline day
// note that the dividend is used in order to remover
var hours = Math.floor(t%(1000*60*60*24)/(1000*60*60));
// Compute the number of minutes before the deadline
var minutes = Math.floor((t%(1000*60*60))/(1000*60));


var seconds = Math.floor((t%(1000*60)) / 1000);

let root = document.querySelector(`.root${site}`);

 root.innerHTML = '<div> Time Left :  </div>'+
 ((days>0)? '<div>  ' + days     +  'Days </div>  ':'' )
+((hours>0)? '<div>  '+ hours    + 'Hours </div>  ':'' )
+ ((minutes>0)?'<div>  '+ minutes  + ' Min </div>  ':'')
+ '<div>  '+ seconds  + 'sec </div>  ';


 }
}, 1000);

}
window.onload = function (){
    
    // alert('Hello I am here');
    var task = document.getElementById('task');
 
    var btn = document.getElementById('btn');
    var _time = document.getElementById('_time');
    var _date = document.getElementById('_date');
    var parent = document.getElementsByClassName('parent')[0];
    var _empty = document.querySelector('p');
     task.value = "";
     _date.value="";
     
 

  


    btn.onclick = function(){

        let color = Math.floor(Math.random()*colors.length);
        console.log(x);

        if(task.value =="" ||_time.value =="" || _date.value =="" ){
            // alert('Enter a task');
            swal({
                title: "All information are required",
                text: "Ensure that your task and deadline have been written!",
                icon: "warning",              
                dangerMode: true,
              });

        }
        else{

           
  //Creating the deadline Counter
 
 //aaaasdafffffff let deadline = `${_date.value} ${_time.value}:00`;

 //Finding dealine
  let deadline = _date.value.split('-');
  
    deadline.reverse();

    let temp = deadline[0]+',';
    deadline[0] = deadline[1];
    deadline[1] = temp; 

    var months = ['jan','feb','mar','Apr','may','jun','july','aug','sept','oct','nov','dec'];
    deadline[0] = months[deadline[0]-1];
    var end = `${deadline[0]} ${deadline[1]} ${deadline[2]} ${_time.value}:00 `;
  
    // console.log(end);
  console.log(end);
  //console.log(_date.value.split('-')); //gina niga nagi gina gani inag anig 
      _empty.style.display = 'none';

      //Creating a new Event container

          var container = document.createElement("div");
              container.className = 'child';
              container.style.border= `2px solid ${colors[x]}`;
              parent.appendChild(container);
    
      //Creating the header for event container
           var header = document.createElement("div");
            header.innerHTML= "Time Left: " + _time.value + " <div class='root'> </div>" + _date.value;
            header.style.backgroundColor = colors[x];
            header.className = `root root${pending_tasks}`;
            console.log(header.innerHTML);
            container.appendChild(header);
// //////////////////////////////////////////////////////////////////////

  // Returns the time from midnight Jan 1 1970 to a specified deadline in milliseconds
  var _deadline = new Date(end).getTime();  

  // alert('countdown.js is here');

  setTimer(_deadline,pending_tasks);
 
// //////////////////////////////////////////////////////////////////////
       //Creating a body for the new task      
            let event = document.createElement('div');
            event.className="task"
            event.innerHTML=task.value;
            container.appendChild(event);

        //Creating a  footer for the container  
            var footer = document.createElement('div');
            footer.innerHTML= "<span> DeadLine: &nbsp" + end + "</span> ";
            footer.style.backgroundColor = colors[x];
            footer.style.color = "white";
            footer.className = "foot"
            container.appendChild(footer);
        //Containing the delete and Complete

        //creating the Task Completed and Delete Task button
            let _taskCompleted = document.createElement('button');
            _taskCompleted.innerHTML= 'Task Completed';
            _taskCompleted.style.padding = '10px';
            _taskCompleted.className = `completed completed${pending_tasks}`;
            footer.appendChild(_taskCompleted);

            _taskCompleted.onclick=function(){
              swal("Good job!", `You deleted ${pending_tasks}  ${pending_tasks>1?'tasks': 'task'} Today!`, "success");
            }

      //Creating the Task Deleted button
        let _taskdeleted = document.createElement('button');
        _taskdeleted.innerHTML= 'Delete Task';
        _taskdeleted.style.padding = '10px';
        _taskdeleted.className = `deleted deleted${pending_tasks}`;
        _taskdeleted.style.borderRadius="1px solid white";
        footer.appendChild(_taskdeleted);

        // Deleting a Tasks is done here
        _taskdeleted.onclick=() => {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not see this task again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Task has been succesfully cancelled", {
                icon: "success",
              });

              
          // ...alert('about to remove child');
          console.log(footer.parentNode);
          let _node =footer.parentNode;
          console.log(_node);  ;
          _node.parentNode.removeChild(_node);
            } else {
              swal("Your task is safe and still pending!");
            }

          });
         
        }

               
              
                
               
      // Stying and passing data into the  the event header
           
                ++x;
       
                task.value = '';
                ++pending_tasks;
                document.querySelector('span').innerHTML=pending_tasks;
            }
           

      
    };


}
