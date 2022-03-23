

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