let puppeteer = require('puppeteer');

console.log("Before");

let browserWillbeLaunchedPromise = puppeteer.launch({
    headless:false
});

browserWillbeLaunchedPromise.then(function(browserInstance){
    return browserInstance.newPage();
})


console.log("After");