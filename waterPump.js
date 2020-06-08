var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('water');
})

client.on('message', function (topic, message){
    var h = message;
    console.log('Current Humidity:' + h.toString())
    if( h < 95){
        console.log('Current Humidity:' + h.toString())
        console.log('Water Pump Activated')
        }
    else{
        console.log('Current Humidity:' + h.toString())
        console.log('Water Pump not needed')
    }
    }
)
