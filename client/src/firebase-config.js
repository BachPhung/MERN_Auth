import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAhdQX1kJVUU_v3jRAUiVa5Nlkuf-q7i0w",
    authDomain: "auth-react-338714.firebaseapp.com",
    projectId: "auth-react-338714",
    storageBucket: "auth-react-338714.appspot.com",
    messagingSenderId: "289001717319",
    appId: "1:289001717319:web:7ddf934294441e87163b62",
    measurementId: "G-BM002M80K0"
  };

  const app = initializeApp(firebaseConfig)

  export const authentication = getAuth(app)