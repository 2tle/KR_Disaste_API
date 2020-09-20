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

실행결과
```
[{
    time: '2020/09/16 15:12:01',
    magnitude: '1.5',
    depth: '18',
    lat: '35.84',
    lng: '129.67',
    location: '경북 포항시 남구 남동쪽 34km 해역'
  },
  {
    time: '2020/09/16 06:42:32',
    magnitude: '1.7',
    depth: '18',
    lat: '36.55',
    lng: '127.27',
    location: '세종시 남남서쪽 5km 지역'
  },
  .......
]
[{
    time: '2020/09/15 17:45:19',
    magnitude: '1.4',
    depth: '11',
    lat: '34.63',
    lng: '127.02',
    location: '전남 장흥군 동남동쪽 12km 지역'
  },
  {
    time: '2020/09/15 13:41:29',
    magnitude: '1.9',
    depth: '12',
    lat: '38.61',
    lng: '126.56',
    location: '북한 황해북도 신계 북북동쪽 13km 지역'
  },
  .......
]
```
getDisasterMessage(callback) 재난문자 가져오기 
 callback으로 err과 result필요. 
 parameter 불필요
 
getEarthquake(bool, callback) 지진정보 가져오기
 bool값이 true면 모든 지진정보 받아오고, false면 규모 2.0 이상의 지진만 받아옴.
 callback으로 err과 result필요.
