var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function() {
    client.subscribe('Light');
})
client.on('message', function (topic, message){
    var l = message;
    if (l < 900){
        l++
        console.log('Current Lumi: ' + l.toString());
        console.log('Light Activated')
    }
    else if (l >= 900){
        console.log('Light Off')
    }
})