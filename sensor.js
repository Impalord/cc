var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    var h =20;
    setInterval(function(){
        client.publish('water', (50+ Math.round(Math.random() * 100)).toString())}, 1000)
})
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
client2.on('connect', function () {
    var t = 10
    setInterval(function(){
        client.publish('Aircon', (5+ Math.round(Math.random() * 30)).toString())}, 1000)
})
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
client3.on('connect', function () {
    var l = 115
    setInterval(function () {
        client.publish('Light', (10+ Math.round(Math.random() * 200)).toString())}, 1000)
})
