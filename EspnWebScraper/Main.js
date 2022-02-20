const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");



request(url,cb);

function cb(err,response,html){
    if(err){
        console.error(err);
    }

    else{
        extractlink(html);
    }
}


function extractlink(html){
    let ch = cheerio.load(html);
    let anchorEle = ch('a[data-hover="View All Results"]');

    let link = anchorEle.attr("href");
    let fulllink = "https://www.espncricinfo.com" + link;
    console.log(fulllink);

    
}