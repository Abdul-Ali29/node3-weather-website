const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
       const url = 'http://api.weatherstack.com/current?access_key=e253a65c0e8b95dd87d041d5b82b2f98&query=' + longitude + ',' + latitude + '&units=m'
    request ({ url, json: true}, (error, {body} = {}) => {

        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + '. The humidity is ' + body.current.humidity + '%.')
            
        }

    })
}









module.exports = forecast