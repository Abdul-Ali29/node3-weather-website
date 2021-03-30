const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
       const url = 'http://api.weatherstack.com/current?access_key=ad000facf3b54c0c723e615cb8256be7&query=' + longitude + ',' + latitude + '&units=m'
    request ({ url, json: true}, (error, {body} = {}) => {

        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' degrees out. it feels like ' + body.current.feelslike + ' degrees out.')
            
        }

    })
}









module.exports = forecast