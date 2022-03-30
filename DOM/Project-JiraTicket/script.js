let modalCont = document.querySelector(".modal-cont");

let colors = ['red','blue','green','yellow'];

let modalprioritycolor = colors[colors.length-1];

let prioritycolorcont = document.querySelectorAll('.priority-color');

let mainCont = document.querySelector('.main-cont');

let textareaCont = document.querySelector(".textarea-cont");
let lockclass ='fa-lock';
let unlockclass ='fa-lock-open';
let addbtn = document.querySelector(".add-btn");
let addFlag = true;
addbtn.addEventListener('click',function(e){
    addFlag = !addFlag;

    if (addFlag == true) {
      modalCont.style.display = "flex";
    } else {
      modalCont.style.display = "none";
    }
})

// let removebtn = document.querySelector(".remove-btn");
// removebtn.addEventListener('click',function(e){
//     let getdisplay = document.querySelector(".modal-cont");
//     getdisplay.style.display = "none";
// })


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
        createticket(modalCont,textareaCont.value);
     modalCont.style.display ='none';
     addFlag=false;
     textareaCont.value ='';
     
    }
    
 
});



prioritycolorcont.forEach(function(colorelem){
    colorelem.addEventListener("click",function(e){
        prioritycolorcont.forEach(function(prioritycolorele){
            prioritycolorele.classList.remove('active');
        });
        colorelem.classList.add('active');

        modalprioritycolor = colorelem.classList[0];
        createticket(modalprioritycolor,textareaCont.value);
       
    })
});


function createticket(ticketcolorele,ticketvalue){
    let divele = document.createElement("div");
    divele.setAttribute('class','ticket-cont'); 
    divele.innerHTML=`<div class="ticket-color ${ticketcolorele}"></div>
    <div class="ticket-id"></div>
    <div class="ticket-area">${ticketvalue}
    </div><div class="ticket-lock">
                    <i class="fa-solid fa-lock"></i>
                </div>`;
    mainCont.appendChild(divele);
    handleRemoval(divele);
    handleLock(divele);
    
}
let removeFlag = false;
let removeBtn = document.querySelector(".remove-btn");
removeBtn.addEventListener("click",function(e){
   removeFlag = !removeFlag;
   if(removeFlag==true){
       removeBtn.style.color='red';
   }
   else{
       removeBtn.style.color='white';
   }
});

function handleRemoval(ticket){
    ticket.addEventListener('click',function(){
        if(removeFlag==true){
            ticket.remove();
        }
    })
}

//Lock and Unlock

function handleLock(ticket){
   let ticketLockEle = ticket.querySelector(".ticket-lock");
   let ticketLock = ticketLockEle.children[0];
   let ticketTaskAra = ticket.querySelector('.ticket-area');
   ticketLock.addEventListener('click',function(e){
       if(ticketLock.classList.contains(lockclass)){
           ticketLock.classList.remove(lockclass);
           ticketLock.classList.add(unlockclass);
           ticketTaskAra.setAttribute('contenteditable','true');
           handlecolor(ticket);
       }
       else{
        ticketLock.classList.remove(unlockclass);
        ticketLock.classList.add(lockclass);
        ticketTaskAra.setAttribute('contenteditable','false');
       }
   })
}

function handlecolor(ticket){
    let ticketcolorstrip = ticket.querySelector('.ticket-color');
    ticketcolorstrip.addEventListener('click',function(e){
        let currentticketcolor = ticketcolorstrip.classList[1];

        let currentticketcoloridx = colors.findIndex(function(color){
            return currentticketcolor===color;
        });

        currentticketcoloridx++;
        let newticketidx = currentticketcoloridx % colors.length;
        let newticketcolor = colors[newticketidx];

        ticketcolorstrip.classList.remove(currentticketcolor);
        ticketcolorstrip.classList.add(newticketcolor);
        
    })
}