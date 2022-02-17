let puppeteer = require('puppeteer');

console.log("Before");

let browserWillbeLaunchedPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    rgs:['--start-fullscreen','--start-maximized']
});

browserWillbeLaunchedPromise.then(function(browserInstance){
   let newTabpromise = browserInstance.newPage();
   return newTabpromise;
}).then(function(newTab){
    console.log("New Tab opened");
    let pageWillbeOpenedPromise = newTab.goto("https://www.pepcoding.com/");
    return pageWillbeOpenedPromise;
}).then(function(webpage){
    console.log("Website opened");
})


console.log("After");