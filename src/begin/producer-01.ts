import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function send() {
  const producer = kafka.producer();
//   const admin = kafka.admin()                   //uncomment this if need to create Topic
  await producer.connect();

//   await admin.createTopics({
//     // waitForLeaders: true,
//     topics: [
//       { topic: 'test-topic:1' },
//     ],
//   })

  await producer.send({
    topic: "topic-test",
    messages: [{ value: "Hello KafkaJS user! V.2 5 2"}],
  });

  await producer.disconnect();
}



send();
