var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function() {
    client.subscribe('Light');
})
client.on('message', function (topic, message){
    var l = message;
    console.log('Current Lumi: ' + l.toString());
    if (l < 120){
        console.log('Current Lumi: ' + l.toString());
        console.log('Light Activated')
    }
    else if (l >= 120){
        console.log('Current Lumi: ' + l.toString());
        console.log('Light Off')
    }
})