let modalCont = document.querySelector(".modal-cont");

let colors = ['red','blue','green','yellow'];
let modalprioritycolor = colors[colors.length-1];

let prioritycolorcont = document.querySelectorAll('.priority-color');
let mainCont = document.querySelector('.main-cont')

let addbtn = document.querySelector(".add-btn");
addbtn.addEventListener('click',function(e){
    let getdisplay = document.querySelector(".modal-cont");
    getdisplay.style.display="flex";
})
let removebtn = document.querySelector(".remove-btn");
removebtn.addEventListener('click',function(e){
    let getdisplay = document.querySelector(".modal-cont");
    getdisplay.style.display = "none";
})
// let modalcont = document.querySelector(".modal-cont");
// let addflag = false;
// addbtn.addEventListener('click',function(e){
//     addflag = !addflag;

//     if(addflag==true){
//         modalcont.style.display = "flex";
//     }
//     else{
//         modalcont.style.display = "none";
//     }
// });

modalCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "Shift"){
     let divele = document.createElement("div");
     divele.setAttribute('class','ticket-cont'); 
     divele.innerHTML=`<div class="ticket-color"></div>
     <div class="ticket-id"></div>
     <div class="ticket-area"></div>`;
     mainCont.appendChild(divele);
     modalCont.style.display ='none';
    }
    
 
});

prioritycolorcont.forEach(function(colorelem){
    colorelem.addEventListener("click",function(e){
        prioritycolorcont.forEach(function(prioritycolorele){
            prioritycolorele.classList.remove('active');
        });
        colorelem.classList.add('active');
    })
})