# Kafka 101

## Producing Messages

### .send option 
| property        | description           | default  |
| ------------- |:-------------:| -----:|
| messages      | An array of objects with "key" (optional), "value" (required), "partition" (optional), "timestamp" (optional), "headers" (optional), example:
[{ key: 'my-key', value: 'my-value'}] | null |
Everything about producer & producer.send in the link below
[Options](https://kafka.js.org/docs/producing#options)

## docker-compose 

### environment 
[wurstmeister/kafka](https://hub.docker.com/r/wurstmeister/kafka)

KAFKA_CREATE_TOPICS : topic1:1:1

>topic1 will have 1 partition and 1 replicas