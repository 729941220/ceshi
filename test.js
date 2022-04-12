//1、导入Express
const express = require('express')
const request = require('request')
//2、调用express()得到一个app
//    类似于 http.createServer()
const app = express()

//3、设置请求对应的处理函数
//    当客户端以GET方法请求/的时候就会调用第二个参数：请求处理函数

app.get('/robot/send', (req, res) => {
    var e = request({
        url: "https://oapi.dingtalk.com/robot/send?" +
            "access_token=d6ebb05c79f4d9a7a54c4067a301a16e12b2e096c786ff08409362bea9581ba4",
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            "msgtype": "markdown",
            "markdown": {
                "title": "杭州天气",
                "text": "#### 杭州天气 @150XXXXXXXX \n > 9度，西北风1级，空气良89，相对温度73%\n > ![screenshot](https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png)\n > ###### 10点20分发布 [天气](https://www.dingtalk.com) \n"
            },
            "at": {
                "atMobiles": [
                    "150XXXXXXXX"
                ],
                "isAtAll": false
            }

        },
        json: true,
    }, (err, req) => {
        res.send({
            "errcode": 0,
            "errmsg": "ok"
        })
    })
})

//4、监听端口号，启动Web服务
app.listen(8080, () => {
    console.log('Web 服务器已运行')
})