
// let arr = ['Hi','I','am','Hardik'];

// let [a,b,c,d,e='bye']=arr;
// console.log(a,b,c,d,e);


// let obj ={
//     name:'hardik',
//     age:10,
//     city:'Delhi'
// }

// let {name,age,city}=obj;
// console.log(name,age,city);

let obj ={
    name:'hardik',
    address:{
        country:'Russia',
        state:{
            statename:'Moscow',
            pincode:9999
        }
    }
}

let {name}=obj;
let {address:{country:cd}}=obj;
console.log(cd);
console.log(name);