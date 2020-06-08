var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
client.subscribe('water');
client2.subscribe('Aircon');
client3.subscribe('Light');
})
client.on('message', function (topic,
message) {setInterval(function(){
    var humidity = message;
    client.publish('water', humidity.toString())
})
})
client2.on('message', function (topic, message) {
    setInterval(function(){
    var temperature = message;
    client.publish('AirCon', temperature.toString())
})
})
client3.on('message', function (topic, message) {
    setInterval(function(){
    var luminosity = message;
    client.publish('Light',luminosity.toString())
})
})
