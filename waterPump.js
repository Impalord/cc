var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('water');
})

client.on('message', function (topic, message){
    var h = message;
    if( h < 95){
        console.log('Current Humidity:' + h.toString())
        console.log('Water Pump Activated')
        client.publish('Wreceive', 'Water Pump On')
        }
    else{
        console.log('Current Humidity:' + h.toString())
        console.log('Water Pump not needed')
        client.publish('Wreceive', 'Water Pump Off')
    }
    }
)
