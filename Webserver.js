var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var data = {"humidity": null, "temperature": null, "luminosity": null};
//declare mqtt framework
var mqtt = require('mqtt')
//connect to the broker
var client = mqtt.connect('mqtt://test.mosquitto.org')
var client2 = mqtt.connect('mqtt://test.mosquitto.org')
var client3 = mqtt.connect('mqtt://test.mosquitto.org')
var client4 = mqtt.connect('mqtt://test.mosquitto.org')
var client5 = mqtt.connect('mqtt://test.mosquitto.org')
var client6 = mqtt.connect('mqtt://test.mosquitto.org')

//connect to sensors and actuators
client.on('connect', function () {
    // Connected
    client.subscribe('water')
    client2.subscribe('Aircon')
    client3.subscribe('Light')
    client4.subscribe('Wreceive')
    client5.subscribe('Areceive')
    client6.subscribe('Lreceive')
})

// Dashboard
function writeToConsole() {
    if (data["water"] == null) return;
    if (data["Aircon"] == null) return;
    if (data["Light"] == null) return;
    if (data["Wreceive"] == null) return;
    if (data["Areceive"] == null) return;
    if (data["Lreceive"] == null) return;
    var content = Date().toString().padEnd(60) + data["water"].padEnd(20) + data["Aircon"].padEnd(20) + data["Light"].padEnd(20) + data['Wreceive'].padEnd(20) + data['Areceive'].padEnd(20)
     + data['Lreceive'].padEnd(20);
    console.log(content);
    data["water"] = data["Aircon"] = data["Light"] = data['Wreceive'] =  data['Areceive'] = data['Lreceive']  = null;
};
var headers = "Timestamp".padEnd(60) + "Humidity".padEnd(20) + "Temperature".padEnd(20) + "Luminosity".padEnd(20) + "Water Pump State".padEnd(20) + "Air Conditioner State".padEnd(20) +  "Light State".padEnd(20);
console.log(headers);
client.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
client2.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
client3.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
client4.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
client5.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
client6.on("message", function(topic, message) {
    var key = topic.toString().split("/").pop();
    data[key] = message.toString();
    writeToConsole();
});
