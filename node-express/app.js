let express = require("express");
let app = express();

app.get("/get_data", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let response = {
    title: '销售数据',
    xAxisData: ["T恤", "牛仔裤", "休闲裤", "连衣裙", "高跟鞋", "半身裙", "打底裤", "西服"],
    seriesData: [50, 180, 100, 220, 90, 150, 300, 160]
  };
  res.type('application/json');
  res.jsonp(response);
});

app.listen(8899, function () {
  console.log("服务器开启了:8899");
});