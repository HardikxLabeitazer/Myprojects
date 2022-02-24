const puppeteer = require("puppeteer");

let email = 'facowo9285@bepureme.com';
let password = 'hardik';
console.log("Before");


let page;



let browserWillbeLaunchedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});


browserWillbeLaunchedPromise.then(function (browserInstance) {
    return browserInstance.newPage();
}).then(function (newTab) {
    page = newTab;
    let pageWillbeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/login");
    return pageWillbeOpenedPromise;
}).then(function () {

    let typeEmailPromise = page.type("input[id='input-1']", email, { delay: 100 })
    return typeEmailPromise;
}).then(function () {
    let typepassPromise = page.type("input[id='input-2']", password, { delay: 100 });
    return typepassPromise;
}).then(function () {
   let loginpromise= page.click("button[data-analytics='LoginPassword']", { delay: 100 });
   return loginpromise;
}).then(function(){
    let algoWillBeclickPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return algoWillBeclickPromise;
}).then(function(){
    let gettowarmuppromise = waitAndClick('input[value="warmup"]',page);
    return gettowarmuppromise;
}).then(function(){
    let ChallengesArrPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay : 100})
    return ChallengesArrPromise
}).then(function(questionArr){
    console.log("No of questions:"+questionArr.length);
})

function waitAndClick(selector,cpage){
    return new Promise(function(resolve,reject){
        let waitformodelpromise = cpage.waitForSelector(selector);
        waitformodelpromise.then(function(){
            let clickmodelpromise = cpage.click(selector,{delay:100});
            return clickmodelpromise;
        }).then(function(){
            resolve();
        }).catch(function(){
            reject();
        })
    })
}




console.log("After");