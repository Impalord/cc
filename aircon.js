var LowerThreshold = 10
var UpperThreshold = 25

var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('Aircon');
})

client.on('message', function (topic, message) {
    var t = message;
    if (t < LowerThreshold ) {
        console.log('Current Temperature' + t.toString())
        console.log('Air Condition Not Needed')
        client.publish('Areceive', 'Air Condition On')
    }
    else if (t > UpperThreshold ){
        console.log('Current Temperature'  + t.toString())
        console.log(' Air Condition Activated')
        client.publish('Areceive', 'Air Condition Off')
    }
})