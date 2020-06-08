var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    var h =20;
    setInterval(function(){
        client.publish('now', (Math.floor(Math.random() * 80) + h ).toString())}, 1000)
})
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
client2.on('connect', function () {
    var t = 10
    setInterval(function(){
        client.publish('now2', (Math.floor(Math.random() * 20) + t ).toString())}, 1000)
    })
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
client3.on('connect', function () {
    var l = 115
    setInterval(function () {
        client.publish('now3', (Math.floor(Math.random() * 15) + l).toString())}, 1000)
})
