import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4F2j5rJ13AkkSgSv9ZzT0CyJitHf8Ido",
  authDomain: "ideax-d7194.firebaseapp.com",
  projectId: "ideax-d7194",
  storageBucket: "ideax-d7194.appspot.com",
  messagingSenderId: "391023742762",
  appId: "1:391023742762:web:8cd151e728f38634d19853",
  measurementId: "G-BT03BCFDQ2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const storage = getStorage(app);
export {app, auth};