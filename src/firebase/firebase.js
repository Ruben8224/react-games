import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBspo6s7VjxUvJH_IzMyHEFIkPqun1qlEM",
  authDomain: "basedatos-d8da6.firebaseapp.com",
  projectId: "basedatos-d8da6",
  storageBucket: "basedatos-d8da6.appspot.com",
  messagingSenderId: "68391783940",
  appId: "1:68391783940:web:11499da02df1ab191aaf51",
  measurementId: "G-35T8JMGNLR"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}