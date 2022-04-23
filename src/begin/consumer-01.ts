import { Kafka } from "kafkajs";


class KafkaConsumer {

  kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  constructor() {
    this.receive();    
  }
   
  private async receive(): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: "test-group" });
  
    await consumer.connect();
    await consumer.subscribe({ topic: "topic-test", fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Incoming Detail => ${topic}:${partition}`);
        console.log({
          value: message.value.toString(),
        });
      },
    });
  }
}

const kafka = new KafkaConsumer();
