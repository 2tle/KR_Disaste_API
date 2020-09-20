# 재난관련 API

## 지원하는 것
현재는 재난문자 및 지진정보를 제공하며, 다양한 기능을 추후 업데이트 예정입니다(12월 이후).
## 시작하기
먼저, disasterKR.js 파일을 다운로드 받아 주세요.
다음, 다음 명령어를 사용하세요.
```
npm install cheerio
npm install request
```
## 사용방법
sample.js 코드를 참조하여 주세요
```
const api = require('./disasterKR.js');
api.getDisasterMessage((err,result) => {
    if(!err) console.log(result);
    else console.log(err);
});
api.getEarthquake(true,(err,result) => {
    if(!err) console.log(result);
    else console.log(err);
});
```
