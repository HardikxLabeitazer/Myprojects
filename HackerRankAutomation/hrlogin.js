const puppeteer = require("puppeteer");
const codefile = require("./code");
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

    //let questionwillbesolvedpromise = questionsolver(page,questionArr[0],codefile.answers[0]);
    //return questionwillbesolvedpromise;
    for(let i = 0;i<questionArr.length;i++){
        let questionwillbesolvedpromise = questionsolver(page,questionArr[i],codefile.answers[i]);
        
    }
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

function questionsolver(page,question,answer){

    return new Promise(function(resolve,reject){

        let questionwillbeclickedpromise = question.click();
        questionwillbeclickedpromise.then(function(){
            let waitForEditorpromise = waitAndClick(".monaco-editor.no-user-select.vs",page);
            return waitForEditorpromise;
        }).
        then(function(){
            return waitAndClick(".checkbox-input",page)
        }).
        then(function(){
            return page.waitForSelector('.text-area.custominput')
        }).then(function(){
            return page.type('.text-area.custominput',answer,{delay:20})
        }).then(function(){
            console.log("Answer Typed");
        })  .then(function () {
            let ctrlIsPressedPromise = page.keyboard.down('Control');
            return ctrlIsPressedPromise
          }).then(function(){
            let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
            return AisPressedPromise
          }).then(function(){
             let XisPressedPromise = page.keyboard.press('X' , {delay:20})
             return XisPressedPromise
          }).then(function(){
            let ctrlIsReleasedPromise = page.keyboard.up('Control')
            return ctrlIsReleasedPromise
         }).then(function () {
           let waitForEditorPromise = waitAndClick(
             ".monaco-editor.no-user-select.vs",
             page
           );
           return waitForEditorPromise;
         }).then(function () {
           let ctrlonHoldPromise = page.keyboard.down('Control');
           return ctrlonHoldPromise
         }).then(function(){
           let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
           return AisPressedPromise
         }).then(function(){
           let VisPressedPromise = page.keyboard.press('V' , {delay:20})
           return VisPressedPromise
        }).then(function(){
         let ctrlIsReleasedPromise = page.keyboard.up('Control')
         return ctrlIsReleasedPromise
      }).then(function(){
         return page.click('.hr-monaco__run-code' , {delay : 20})
      }).then(function(){
        resolve()
      }).catch(function(err){
        console.log(err)
      })
    })
}


console.log("After");