const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const url = "https://en.wikipedia.org/wiki/Main_Page";

request(url,function(err,response,html){
  if(err){
      console.log(err);
  }
  else{
      getlink(html);
  }
});

function getlink(html){
    let ch = cheerio.load(html);
    let getele = ch('a[title="Guides to browsing Wikipedia"]');
    let link = getele.attr("href");
    let fullLink = "https://en.wikipedia.org" + link;
    getcontentslink(fullLink);
}

function getcontentslink(fullLink){
    let ch = cheerio.load(fullLink);
    let getelement = ch('');
    let link = getelement.attr("href");
    let FL = "https://en.wikipedia.org/wiki/" + link;
    console.log(FL);
}