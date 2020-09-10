
const rabbitmq = require("amqplib");

function log(message) {
   // console.log(`${Date.now()}: ${message}`);
}

let name = process.argv[2]; // node producer.js -->[this]<--


async function run() {
    try {
        // Establish connection with our broker
        log("Establishing the connection...");
        let connection = await rabbitmq.connect("amqp://localhost:5672");
        log("Conenction established...");
        // We are using default channel or exchange
        let channel = await connection.createChannel();
        // Creating queue
        log("Connecting with queue");
        let q = await channel.assertQueue("Orders");
        log("Connected...");
        log("Sending message to q");
        channel.sendToQueue("Orders", Buffer.from(name), {persistent: true,
        noAck: false,
        timestamp: Date.now(),
        contentEncoding: 'utf-8'});
        log("Message sent!!");
        // Closing channel
        await channel.close();
        log("Channel closed from producer side process...");
        // Close connection
        await connection.close();
        log("Connection closed...");
    }
    catch(e) {
        log("Exception occured...");
        console.error(e);
    }
}

run();

