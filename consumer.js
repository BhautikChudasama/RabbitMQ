
const rabbitmq = require("amqplib");

function log(message) {
    console.log(`${Date.now()}: ${message}`);
}

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
        let q = await channel.assertQueue("Orders", { durable: true });
        log("Connected...");
        log("Waiting for message...");
        channel.consume("Orders", (message) => {
            console.log("Message consumed!!");
            console.log(`Orders: ${message.content.toString()}`);
            channel.ack(message);
        })
        
    }
    catch(e) {
        log("Exception occured...");
        console.error(e);
    }
}

run();

