const api = require('./disasterKR.js');
api.getDisasterMessage((err,result) => {
    if(!err) console.log(result);
    else console.log(err);
});
api.getEarthquake(true,(err,result) => {
    if(!err) console.log(result);
    else console.log(err);
});