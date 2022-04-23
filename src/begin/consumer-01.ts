import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});


async function receive() {
  const consumer = kafka.consumer({ groupId: "test-group" });

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



receive();