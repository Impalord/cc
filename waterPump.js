var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('water');
})

client.on('message', function (topic, message){
    for(var h = message; h < 95; h+= 5) {
        console.log('Water Pump Activated');
        setTimeout(myFunction,1000);
        console.log('Current Humidity: ' + h.toString());
        setInterval(function(){
            var h2 = h
            client.publish('humidchange', h2.toString())},1000)
    }
        if( h = 95){
            console.log('Turn off water Pump');
        }
    }
)
function myFunction() {
    console.log(' Delayed 1 second');
}

