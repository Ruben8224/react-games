class KafkaService {
  //url = 'https://your-kafka-express-service-kafka-adsoftsito.cloud.okteto.net/';
  url = 'my-kafka-0.my-kafka-headless.rubencastillo1234.svc.cluster.local:9092';
 
  reaction = async (name) => {
   await fetch(this.url + 'like?name=' + name, {
      method: 'GET',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => console.log(response.json()))
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
         console.log(err.message);
      });
  }

}

const GamesDataServiceInstance= new KafkaService();
export default GamesDataServiceInstance