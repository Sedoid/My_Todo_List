

var pending_tasks = 0;
var Ongoing_tasks = 0;
window.onload = function (){
    
    alert('Hello I am here');
    var task = document.getElementById('task');
    task.value = "";
    var btn = document.getElementById('btn');
    var _time = document.getElementById('_time');
    var _date = document.getElementById('_date');
    var parent = document.getElementsByClassName('parent')[0];
    var _empty = document.querySelector('p');
  
 

  


    btn.onclick = function(){

        if(task.value ==""){
            // alert('Enter a task');
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
            
        }
        else{

              ++pending_tasks;
      _empty.style.display = 'none';

      //Creating a new Event container

          var container = document.createElement("div");
              container.className = 'child';
              container.style.border= '2px solid #8c1418';
              parent.appendChild(container);
    
      //Creating the header for event container
           var header = document.createElement("div");
            header.innerHTML= "Time Left: " + "DeadLine: &nbsp" + _time.value+ " " + _date.value;
            header.style.backgroundColor = 'green';
            console.log(header.innerHTML);
            container.appendChild(header);

       //Creating a body for the new task      
            let event = document.createElement('div');
            event.className="task"
            event.innerHTML=task.value;
            container.appendChild(event);

        //Creating a  footer for the container  
            var footer = document.createElement('div');
            footer.innerHTML= "<span> DeadLine: &nbsp" + _time.value+ " " + _date.value; + "</span> ";
            footer.style.backgroundColor = '#8c1418';
            footer.className = "foot"
            container.appendChild(footer);

        //creating the Task Completed and Delete Task button
            let _taskCompleted = document.createElement('button');
            _taskCompleted.innerHTML= 'Task Completed';
            _taskCompleted.style.padding = '10px';
            _taskCompleted.className = 'completed';
            footer.appendChild(_taskCompleted);

            _taskCompleted.onclick=function(){
                swal("Good job!", `You Completed ${pending_tasks}  Task(s) Today!`, "success");
            }
              
               
              
                
               
      // Stying and passing data into the  the event header
           

       
                task.value = '';
                document.querySelector('span').innerHTML=pending_tasks;
            }
           

      
    };


}
