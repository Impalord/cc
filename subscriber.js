var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
client.subscribe('now');
client2.subscribe('now2');
client3.subscribe('now3');
})
client.on('message', function (topic,
message) {setInterval(function(){
    var humidity = message;
    client.publish('water', humidity.toString())
})
})
client2.on('message', function (topic, message) {
    setInterval(function(){
    var temparature = message;
    client.publish('AirCon', temparature.toString())
})
})
client3.on('message', function (topic, message) {
    setInterval(function(){
    var ilu = message;
    client.publish('Light', ilu.toString())
})
})
