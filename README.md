# RabbitMQ
RabbitMQ is an open source multi-protocol messaging broker 🤓

## Architecture of RabbitMQ
![RabbitMQ Architecture](https://www.cloudamqp.com/img/blog/exchanges-bidings-routing-keys.png)

In here producer produce the message on multiple queues and consumer can consume message from queue and send ack.

## Installation
- [x] You have docker installed on your machine
- [x] You have Node v12.0.0^

1. Run the following docker command to install RabbitMQ.
     ```$> docker pull rabbitmq```
2. Expose our rabbitmq broker on port 5672, so we can access it to outside.
    ```$> docker run -p 5672:5672 -d rabbitmq```
3. Run the broker using 
    ```$> npm run broker```
4. Run the consumer using 
    ```$> npm run consumer```
5. Run the producer 
    ```$> npm run producer [message]```
### Pros
* It's works on ```queue``` architecture, where message receive by single consumer.
* Examples are payment verification

### Cons
* Lot's of abstaractions because lots of protocols
* Complex
* Push architecture
* Not scalable

### Kafka vs RaabbitMQ
* [Apache Kafka vs RabbitMQ!](https://www.upsolver.com/blog/kafka-versus-rabbitmq-architecture-performance-use-case#:~:text=RabbitMQ%20is%20a%20general%20purpose,MQTT%2C%20AMQP%2C%20and%20STOMP.&text=Kafka%20is%20a%20durable%20message,send%20messages%20to%20a%20topic)

## Thankyou
* Bhautik Chudasama


