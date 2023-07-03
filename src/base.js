import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMUVjaVwCLEP5N5D1ve3kbNyY7U4ttqS8",
  authDomain: "reactjs-chatapp-f43fc.firebaseapp.com",
  projectId: "reactjs-chatapp-f43fc",
  storageBucket: "reactjs-chatapp-f43fc.appspot.com",
  messagingSenderId: "984656974813",
  appId: "1:984656974813:web:7c1af7f9b8987e89819c34",
  measurementId: "G-FHMJS4DEY2"
};

    
const app = firebase.initializeApp(firebaseConfig)
export default app;


