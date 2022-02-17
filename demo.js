let puppeteer = require('puppeteer');

console.log("Before");

let browserWillbeLaunchedPromise = puppeteer.launch({
    headless:false
});

browserWillbeLaunchedPromise.then(function(browserInstance){
   let newTabpromise = browserInstance.newPage();
   return newTabpromise;
}).then(function(newPage){
    
})


console.log("After");