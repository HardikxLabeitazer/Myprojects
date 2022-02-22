const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require('path');
const allMatchobj = require("./allMatch");

let iplpath = path.join(__dirname,"IPL");
function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){
        fs.mkdirSync(filepath);
    }
}

dirCreator(iplpath);


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

    allMatchobj.getALLMatch(fulllink);

    
}