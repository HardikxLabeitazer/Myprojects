const puppeteer = require("puppeteer");

let email = 'facowo9285@bepureme.com';
let password = 'hardik';
console.log("Before");


let page;



let browserWillbeLaunchedPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    rgs:['--start-maximized']
});


browserWillbeLaunchedPromise.then(function(browserInstance){
    return browserInstance.newPage();
}).then(function(newTab){
    page = newTab;
     let pageWillbeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/login");
     return pageWillbeOpenedPromise;
}).then(function(){
    
    let typeEmailPromise = page.type("input[id='input-1']",email,{delay:100})
    return typeEmailPromise;
}).then(function(){
    let typepassPromise = page.type("input[id='input-2']",password,{delay:100});
    return typepassPromise;
}).then(function(){
    page.click("button[data-analytics='LoginPassword']",{delay:100});
})






console.log("After");