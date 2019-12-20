var audio = document.querySelector('audio');
  // Registering the Service Workers
// localStorage.clear()
  //
var run;
  function setTone(){
 //   var audio = document.querySelector('audio');

    // if(navigator){
      let db = indexedDB.open('ringtone',1);
      db.addEventListener('upgradeneeded',event =>{
        let db = event.target.result;
        db.createObjectStore('music');
      })
      db.addEventListener('success',event =>{
        console.log('success')
        let db = event.target.result;
        let store = db.transaction('music','readwrite');
        let store_parker = store.objectStore('music');
        let file_holder = document.querySelector("input[type='file']");
        store_parker.put(file_holder.files[0],0);
      })
      db.addEventListener('error',(event)=>{
        console.log('An error occured in creating the database');
      })
    }
    
  // }

// Handle the RingTone ability
  const ringtone = document.querySelector('#ringTone');
  ringtone.addEventListener('click',function(){
      let file_holder = document.querySelector("input[type='file']");
      file_holder.click();
    file_holder.addEventListener('change',setTone);
  });

// window.localStorage.removeItem(1);
let x = 0;
let pending_tasks = 0;
let Ongoing_tasks = 0;

 let colors =[
   './assets/pics/quote19-1.png',
   './assets/pics/dope0.jpeg',
   './assets/pics/dope.jpg',
      './assets/pics/If-it-is-important-to-you-you-will-find-a-way.-If-not-you-will-find-excuses.-Daniel-Decker.jpg',
   './assets/pics/use.jpg',
   './assets/pics/141112_goals.jpg',
   './assets/pics/original.jpg',
   './assets/pics/632227.jpg',
   './assets/pics/632659.jpg',
   './assets/pics/632812.jpg',
   './assets/pics/633170.jpg',
   './assets/pics/633409.jpg',
   './assets/pics/35855507-motivational-wallpapers-hd.jpg',
   './assets/pics/change (1).jpg',
   './assets/pics/create-your-dreamweb3.jpg',
   './assets/pics/Dream.jpg',
   './assets/pics/how-to-motivate-about-success-through-sports-motivational-quotes-3108.jpg',
   './assets/pics/just-do-it.jpg',
   './assets/pics/Motivational-Quotes.jpg',
   './assets/pics/photo-1468971050039-be99497410af.jpeg',
   './assets/pics/photo-1522120691812-dcdfb625f397.jpeg',
   './assets/pics/quote0.jpeg',
   './assets/pics/quote2.jpeg',
   './assets/pics/quote6.jpg',
   './assets/pics/quote7.jpg',
   './assets/pics/quote8.jpg',
   './assets/pics/quote11.jpeg',
   './assets/pics/quote12.jpg',
   './assets/pics/quote13.jpg',
   './assets/pics/quote14.jpg',
   './assets/pics/quote14.png',
   './assets/pics/quote15.jpg',
   './assets/pics/quote19.png',
   './assets/pics/quotes.jpg',
   './assets/pics/quotes.jpg',
   './assets/pics/quotr22.jpeg',
   './assets/pics/Screen-Shot-2017-08-14-at-5.19.33-PM-1.png',
   './assets/pics/stopwish.png',
   './assets/pics/Time-for-Change.jpg',
   './assets/pics/',
   './assets/pics/',



  ];
// alert(Math.floor(Math.random()*18)); ,

  var saved_data ={
    done:0,
    deleted: 0,
  }


function setTimer (time_up,site){

   run = setInterval(
    function(){
      var now = new Date().getTime(); 
      var t = time_up-now;
   if(t <= 0){
    
     document.querySelector(`.root${site}`).innerHTML =
      '<span style="color: red"> EXPIRED</span>';
    //audio.play();
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

 root.innerHTML = 
 ((days>0)? '<div>  ' + days     +  'Days </div>  ':'' )
+((hours>0)? '<div>  '+ hours    + 'Hrs </div>  ':'' )
+ ((minutes>0)?'<div>  '+ minutes  + ' Min </div>  ':'')
+ '<div>  '+ seconds  + '  sec</div><div>Left </div>  ';

if((days==0 && hours ==0 && minutes == 5 && seconds ==0) || (days==0 && hours ==0 && minutes == 2 && seconds ==0) ||(days==0 && hours ==0 && minutes == 0 && seconds ==0)) {
  let db = indexedDB.open('ringtone',1);
  let audio  = document.querySelector('audio');
  
    

  db.addEventListener('error',event =>{
    alert('No Ringtone Set');
  })
  db.addEventListener('success', event =>{
    let db = event.target.result;
    try{
    let tx = db.transaction('music','readwrite');
    let store = tx.objectStore('music');
    }catch{
    audio.play();
    }
    
    let song = store.get(0);
    song.addEventListener('success' ,event => {
      let data = event.target.result;
      console.log(song.result);
      let audio  = document.querySelector('audio');
      let audiosrc = URL.createObjectURL(song.result); 
      audio.src = audiosrc;  
      audio.autoplay = false;
      audio.play();
      
    })
  })
}

 }
}, 1000);

}


function formatDate(date,time,pending_tasks,done,deleted){
console.log('Into the format date function:'+time + date);
  if(!done && !deleted){
   let modulation = time.split('');
  modulation.pop();
  let letter = modulation.pop();
  let test = [modulation[0],modulation[1]]
  let twelve = test.join('');
  if( letter == 'P' && twelve != '12')
      {
        console.log('pm mode');
      modulation =   modulation.join('');
       let temp =  modulation.split(':')
       temp[0] = parseInt(temp[0]) + 12;
       temp[0]+=':';
      // temp.push(':00');
       time = temp.join('')
      
     console.log(time)
      }
 
  let end = `${date} ${time}`;
 console.log('End' + end);
  
    var _deadline = new Date(end).getTime();  


    setTimer(_deadline,pending_tasks);
    return end;
  }
  
}

//window.onload = function (){

 var task = document.getElementById('textarea');
 
    var btn = document.querySelector('.create');
    var _time = document.querySelector('.timepicker');
    var _date = document.querySelector('.datepicker');
    var parent = document.getElementsByClassName('parent')[0],
        completed = document.getElementsByClassName('parent')[1],
        _deleted = document.getElementsByClassName('parent')[2],
        _empty = document.querySelector('p');



   function taskComponent(task,x,pending_tasks,date,time){
      let checkCompleted,checkDeleted;
     if(typeof(task)!= 'string'){
   
        checkDeleted = task.deleted,
        checkCompleted = task.done;
        console.log("Deleted:" + checkDeleted + " Completed: "+ checkCompleted)
      task = task.task
     }
     // Distributing the task to their various sections of the page
      
      var container = document.createElement("div");
      container.className = `${pending_tasks} child `;
      // container.style.border= `2px solid ${colors[x]}`;

      if( checkCompleted == 1 )
        {
         document.getElementsByClassName('ibadge')[1].innerHTML = parseInt(document.getElementsByClassName('ibadge')[1].innerHTML)+ 1;
          completed.appendChild(container);
        } 
      
      else if( checkDeleted == -1 )
        {
         document.getElementsByClassName('ibadge')[2].innerHTML = parseInt(document.getElementsByClassName('ibadge')[2].innerHTML) +  1;
          _deleted.appendChild(container);
        } 
      else
        { 
         document.getElementsByClassName('ibadge')[0].innerHTML = parseInt(document.getElementsByClassName('ibadge')[0].innerHTML) + 1;
          parent.insertBefore(container,parent.childNodes[4]);
        }


    //Creating the header for event container
    var header = document.createElement("div");
    //header.innerHTML= "Time Left: " + _time.value + " <div class='root'> </div>" + _date.value;
    //  header.style.backgroundColor = 'red';
    header.className = `image`;
    header.style.backgroundImage =  `url('${colors[pending_tasks%40]}')`
    console.log(header.innerHTML);
    container.appendChild(header);
    // /////////////////////////////////////////////////
    let event = document.createElement('div');
    event.className="task"
    event.innerHTML= `Task:<br /> ${task} `;
    container.appendChild(event);
    
    //Creating a  footer for the container  
    var footer = document.createElement('div');
    footer.innerHTML= "";
    // footer.style.backgroundColor = colors[x];
    // footer.style.color = "white";
    footer.className = `root root${pending_tasks}`
    container.appendChild(footer);

    //Containing the delete and Complete
    
    //creating the Task Completed and Delete Task button
    let _taskCompleted = document.createElement('button');
    _taskCompleted.innerHTML= '<img src="./assets/pics/tik.png" />';
  //     _taskCompleted.style.width = 100;
  //  _taskCompleted.style.height = 50;
    _taskCompleted.className = `completed completed${pending_tasks}`;
    
    if(!checkCompleted)
    header.appendChild(_taskCompleted);
   
    
    _taskCompleted.onclick=function(){
      saved_data.done = 1;
     // alert(saved_data.done);
      console.log(event.target)
      console.log(saved_data)
      let temp = this.parentNode.parentNode.classList.value;
          temp = parseInt(temp)
      let item = localStorage.getItem(temp)
          item= JSON.parse(item);
          item.done = 1;
          localStorage.setItem(temp,JSON.stringify(item));
      console.log(localStorage.getItem(temp))
     
      completed.appendChild(this.parentNode.parentNode)
      console.log( 'root' + this.parentNode.parentNode.classList[0])
      swal("Good job!", `You deleted ${pending_tasks}  ${pending_tasks>1?'tasks': 'task'} Today!`, "success");             
      this.innerHTML = " ";

      // this.parentNode.removeChild(`${deleted.parentNode}`);
      document.getElementsByClassName('ibadge')[1].innerHTML= parseInt(document.getElementsByClassName('ibadge')[1].innerHTML)  + 1;
    }
     

    //Creating the Task Deleted button
    let _taskdeleted = document.createElement('button');
    _taskdeleted.innerHTML= '<img src="./assets/pics/cross0.png" />';//❌
 

    _taskdeleted.className = `deleted deleted${pending_tasks}`;
    _taskdeleted.style.borderRadius="1px solid white";
    header.appendChild(_taskdeleted);
    
    
    
    // Deleting a Tasks is done here
    _taskdeleted.onclick=(event) => {

    swal({
    title: "Are you sure?",
    text: "Once deleted, you will not see this task again!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
      swal("Task has been succesfully Deleted", {
        icon: "success",
      });

  console.log(event.target)
      let temp = event.target.parentNode.parentNode.parentNode.classList.value;
      console.log(event.target)
          temp = parseInt(temp)
          console.log(temp)
      let item = localStorage.getItem(temp)
          item= JSON.parse(item);
          item.deleted =  item.deleted -1;
          localStorage.setItem(temp,JSON.stringify(item));
      console.log(event.target.parentNode)
      document.getElementsByClassName('ibadge')[0].innerHTML= parseInt(document.getElementsByClassName('ibadge')[0].innerHTML)  - 1;
      document.getElementsByClassName('ibadge')[2].innerHTML= parseInt(document.getElementsByClassName('ibadge')[2].innerHTML)  + 1;
      _deleted.appendChild(event.target.parentNode.parentNode.parentNode)
       clearInterval(run)
  //  alert('about to remove child');
      if(item.deleted < -1)
      {
       

    let _node =footer.parentNode;
   

    let keys = Object.keys(localStorage);
    let del = _node.className;
   
      // alert(del);
   del = del.split(' ');
    let c =del[0];
     
    _node.parentNode.removeChild(_node);

   keys.forEach(index =>{
      if(index == del[0]){
        //  alert('about to remove'+ del[0]);
        window.localStorage.removeItem(index);
      }
   });
  
      window.localStorage.removeItem(c);
      document.getElementsByClassName('ibadge')[2].innerHTML= parseInt(document.getElementsByClassName('ibadge')[2].innerHTML)  - 1;
      }

// alert(window.localStorage.getItem(del[0]));
    } else {
      swal("Your task is safe and still pending!");
    }
    
    });
    
    }
      return saved_data;
    }

   
    task.value = "";
    _date.value="";

var counter = 0,
  keys = Object.keys(localStorage);
      keys.sort();

_empty.style.display = 'none';

      keys.forEach( index =>{
        // alert(index);
         let user = JSON.parse(window.localStorage.getItem(index));
  taskComponent(user,index,index,user.deadline,user.deadline,user.time);
  formatDate(user.deadline,user.time,index,user.done,user.deleted);
      });



// alert(keys);
  var values=[...keys];
// alert('values'+values);
if(keys.length>0){
  let c = parseInt(values[keys.length-1]);
 // alert('c is '+typeof(c)+ ++c);
  pending_tasks =c+1;
  // alert('1 pending task is  '+ pending_tasks);
 
}else{
  // alert('2 pending task is'+ counter);
  pending_tasks = 0;
}
  //(keys[counter-1])>0? counter+1:0;  


    btn.onclick = function(){

         let color = Math.floor(Math.random()*colors.length);
   
        if(task.value =='' ||_time.value =="" || _date.value =="" ){
            // alert('Enter a task');
            swal({
                title: "All information are required",
                text: "Ensure that your task and deadline have been written!",
                icon: "warning",              
                dangerMode: true,
              });

        }
        else{
   _empty.style.display = 'none';
 
  taskComponent(task.value,x,pending_tasks,_date.value,_time.value);
  formatDate(_date.value,_time.value,pending_tasks,0,0);
 // Save the data in the localStorage 
   saved_data.deadline  = _date.value ;
   saved_data.task      = task.value;
   saved_data.time      = _time.value;

    window.localStorage.setItem(pending_tasks,JSON.stringify(saved_data)); 
    
                ++x;
       
                task.value = '';
                ++pending_tasks;
                document.querySelector('span').innerHTML=localStorage.length;
            }           
console.log(saved_data);
      
     };



//}

