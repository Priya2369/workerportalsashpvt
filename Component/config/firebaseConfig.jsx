import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9yCPUy7HODow9317qaygu0JxKjQOpvzM",
    authDomain: "xyzabc-4cbb9.firebaseapp.com",
    projectId: "xyzabc-4cbb9",
    storageBucket: "xyzabc-4cbb9.appspot.com",
    messagingSenderId: "550922698171",
    appId: "1:550922698171:web:44a467aa7e1ef5ab81d89e"
  };
  
  export default function initFirebase() {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
  }