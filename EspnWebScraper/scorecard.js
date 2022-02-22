
const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");



function processScoreCard(url) {
    request(url, cb);
}

function cb(err, response, html) {
    if (err) {
        console.error(err);
    }
    else {
        extractMatchDetails(html);
    }
}

function extractMatchDetails(html) {

    let ch = cheerio.load(html);
    let desString = ch(".match-header-info.match-info-MATCH .description");

    let desStringArr = desString.text().split(",");

    let venue = desStringArr[1].trim();
    let date = desStringArr[2].trim();

    let result = ch(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span").text();

    console.log(venue);
    console.log(date);
    console.log(result);

    console.log("------------------------------");

    let innings = ch(".card.content-block.match-scorecard-table>.Collapsible");

    let htmlString = "";
    for (let i = 0; i < innings.length; i++) {
        htmlString += ch(innings[i]).html();

        let teamName = ch(innings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        let opponentindex = i == 0 ? 1 : 0;
        let opponentName = ch(innings[opponentindex]).find("h5").text();
        opponentName = opponentName.split("INNINGS")[0].trim();

        //console.log(teamName,opponentName);

        let cInning = ch(innings[i]);

        let allrows = cInning.find(".table.batsman tbody tr");
        for (let j = 0; j < allrows.length; j++) {
            let allcols = ch(allrows[j]).find("td");
            let isworthy = ch(allcols[0]).hasClass("batsman-cell");

            if (isworthy == true) {
                let playerName = ch(allcols[0]).text().trim();

                let runs = ch(allcols[2]).text().trim();
                let balls = ch(allcols[3]).text().trim();
                let fours = ch(allcols[5]).text().trim();
                let sixes = ch(allcols[6]).text().trim();
                let STR = ch(allcols[7]).text().trim();
                console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR}`);


                processplayer(
                    teamName,
                    opponentName,
                    playerName,
                    runs,
                    balls,
                    fours,
                    sixes,
                    STR,
                    venue,
                    date,
                    result
                );
            }
        }
        console.log("----------------------------------------");
    }


}


function processplayer(  teamName,
    opponentName,
    playerName,
    runs,
    balls,
    fours,
    sixes,
    STR,
    venue,
    date,
    result){
        let teampath = path.join(__dirname,teamName);
        dirCreator(teampath);

        let filepath = path.join(teampath,playerName + ".xlsx");
        let content = excelReader(filepath,playerName);

        let playerObj = {
            teamName,
            opponentName,
            playerName,
            runs,
            balls,
            fours,
            sixes,
            STR,
            venue,
            date,
            result
        };

        content.push(playerObj);
        excelwriter(filepath,playerName,content);
    }

function dirCreator(folderpath){
    if(fs.existsSync(folderpath)==false){
        fs.mkdirSync(folderpath);
    }
}


function excelwriter(fileName,sheetName,jsonData){
    let newWB = xlsx.utils.book_new();

    let newWS = xlsx.utils.json_to_sheet(jsonData);
    xlsx.utils.book_append_sheet(newWB,newWS,sheetName);
    xlsx.writeFile(newWB,fileName);
}

function excelReader(fileName,sheetName){
    if(fs.existsSync(fileName)==false){
        return [];
    }

    let wb = xlsx.readFile(fileName);

    let exceldata = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(exceldata);
    return ans;
}

module.exports ={
    ps:processScoreCard,
};