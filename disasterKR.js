const cheerio = require('cheerio');
const request = require('request');

let disasterKR = {};

// 재난문자 가져오기
disasterKR.getDisasterMessage = (callback) => {
    var uri = "http://m.safekorea.go.kr/idsiSFK/neo/ext/json/disasterDataList/disasterDataList.json";
    request.get({uri: uri, gzip:true,'headers':{'Accept-Encoding' : 'gzip'}}, (err,res,body) => {
	let returnjson = JSON.parse(body);
        var returnArr = []; 
        for(var i = 0; i < 10 ; i++) {
            var temp = returnjson[i]["SJ"].split(' ');
            var where = temp[2].split('자');
            var json = {
                'date':temp[0]+' '+temp[1],
                'location': where[1],
                'text':returnjson[i]["CONT"]
            };
            returnArr[i] = json;
        }
        callback(null,returnArr);
    });
};

// 지진정보 가져오기
disasterKR.getEarthquake = (getAll, callback) => {
    if(getAll == true) var uri = 'https://www.weather.go.kr/plus/eqkvol/domesticlist.jsp?dpType=a'; 
    else if(getAll == false) var uri= "https://www.weather.go.kr/plus/eqkvol/domesticlist.jsp?dpType=m";
    else throw new Error('Unknown Parameter');
    request({uri: uri}, (err,res,body) => {
        let resultArr = [];
        const $ = cheerio.load(body);
        let colArr = $("table#excel_body tbody tr");
        var length1 = 0;
        if(colArr.length >= 20) {
            length1 = 20;
        } else {
            length1 = colArr.length;
        }
        for(var i = 0;i < length1 ; i++) {
            try {
                var json = {
                    'time': colArr[i].children[1].children[0].data,
                    'magnitude': colArr[i].children[2].children[0].data,
                    'depth': colArr[i].children[3].children[0].data,
                    'lat':colArr[i].children[5].children[0].data.replace(' N ',''),
                    'lng':colArr[i].children[6].children[0].data.replace(' E ',''),
                    'location':colArr[i].children[7].children[0].data,
                };
            } catch (e) {
                callback(e,null)
            }
            resultArr[i] = json;
        }
        callback(null, resultArr);
    });
};


module.exports = disasterKR;
