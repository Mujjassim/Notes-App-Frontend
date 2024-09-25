import mqtt from 'mqtt';

const client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt'); // Change to your broker if needed

export const publishTask = (task) => {
  client.publish('/add', task, (err) => {
    if (err) {
      console.error('Error publishing to MQTT:', err);
    } else {
      console.log('Task published to MQTT:', task);
    }
  });
};
