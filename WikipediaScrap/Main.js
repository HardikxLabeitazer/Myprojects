const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const url = "https://en.wikipedia.org/wiki/Wikipedia:Contents";

request(url,function(err,response,html){
  if(err){
      console.log(err);
  }
  else{
      getlink(html);
  }
});

// function getlink(html){
//     let ch = cheerio.load(html);
//     let getele = ch('a[title="Guides to browsing Wikipedia"]');
//     let link = getele.attr("href");
//     let fullLink = "https://en.wikipedia.org" + link;
    
//     getcontentslink(fullLink);
// }

function getlink(html){
    let $ = cheerio.load(html);
    let getelement = $('a[title="Wikipedia:Contents/A–Z index"]');
    let lin = getelement.attr("href");
    let fulllink = "https://en.wikipedia.org/" + lin;
    console.log(fulllink);
}