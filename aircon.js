
var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('AirCon');
})

client.on('message', function (topic, message) {
    var t = message;
    if (t < 10){
        console.log('Air Condition Activated')
        if( t = 10){
            console.log('Current Temparature'  + t.toString())
            console.log('Air Condition Off')
        }
    }
    else if ( t > 25){
        console.log('Current Temparature'  + t.toString())
        console.log('Air Condition Activated')
    }
    else{
        console.log('Current Temparature'  + t.toString())
        console.log(' Air Condition Not Needed')
    }
})