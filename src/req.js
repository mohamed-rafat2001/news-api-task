const request = require('request')
const reqFunc = (callback) => {
    let url = 'https://api.thenewsapi.com/v1/news/all?api_token=1Kg55kasrfA2S6Dw2xo6Co4DaE67gM6hU2DwqI12'
    request({ url, json: true }, (error, res) => {
        if (error) {
            callback("url is undefined", undefined)
        }
        else if (res.body.error) {
            callback(res.body.error.message, undefined)

        }

        else {
            callback(undefined, {
                title: res.body.data[1].title,
                discription: res.body.data[1].description,
                img: res.body.data[1].image_url
            })

        }
    })
}

module.exports = reqFunc