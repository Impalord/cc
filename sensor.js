var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    setInterval(function(){
        const h =20;
        client.publish('now', h.toString())})
})
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
    setInterval(function(){
        const t = 25;
        client.publish('now2', t.toString())},1000)})
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
    setInterval(function () {
        const l = 10;
        client.publish('now3', l.toString())
    }, 1000)
})