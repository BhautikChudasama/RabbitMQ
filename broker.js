
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
        log("Creating queue...");
        let q = await channel.assertQueue("Orders");
        log("Queue created...");
        // Close connection
        connection.close();
        log("Connection closed...");
    }
    catch(e) {
        log("Exception occured...");
        console.error(e);
    }
}

run();

