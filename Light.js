var Threshold = 120;


var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function() {
    client.subscribe('Light');
})
client.on('message', function (topic, message){
    var l = message;
    if (l < Threshold){
        console.log('Current Lumi: ' + l.toString());
        console.log('Light Activated')
        client.publish('Lreceive', 'Light On')

    }
    else if (l >= Threshold){
        console.log('Current Lumi: ' + l.toString());
        console.log('Light Off')
        client.publish('Lreceive', 'Light Off')
    }
})