import firebase from "../firebase/firebase";

const db = firebase.collection("/videojuegos");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(juego) {
    return db.add(juego);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
const GamesServiceDataServiceInstance= new TutorialDataService();
export default GamesServiceDataServiceInstance