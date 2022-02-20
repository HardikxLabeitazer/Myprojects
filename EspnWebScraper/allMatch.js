const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"
const cheerio = require("cheerio");

const request = require("request");


function getALLMatchLink(url){
    request(url,function(error,response,html){
        if(error){
            console.log(error);
        }
        else{
            extractAllLink(html);
        }
    })
}
function extractAllLink(html){
    let ch = cheerio.load(html);

    let scorecard = ch('a[data-hover="Scorecard"]');

    for(let i = 0;i<scorecard.length;i++){
        let link = ch(scorecard[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com"+link;

        console.log(fullLink);
    }
}

getALLMatchLink(url);