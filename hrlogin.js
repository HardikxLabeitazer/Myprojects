const puppeteer = require("puppeteer");

let email = 'facowo9285@bepureme.com';
let password = 'hardik';
console.log("Before");


let page 



let browserWillbeLaunchedPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null
});


browserWillbeLaunchedPromise.then(function(browserInstance){
    return browserInstance.newPage();
}).then(function(newTab){
     let pageWillbeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/signup");
     return pageWillbeOpenedPromise;
}).then(function(webpage){
    
    let typeEmailPromise = page.type();
})






console.log("After");