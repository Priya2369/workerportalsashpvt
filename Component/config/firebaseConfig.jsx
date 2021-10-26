import firebase from 'firebase/app';
import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyA9yCPUy7HODow9317qaygu0JxKjQOpvzM",
//     authDomain: "xyzabc-4cbb9.firebaseapp.com",
//     projectId: "xyzabc-4cbb9",
//     storageBucket: "xyzabc-4cbb9.appspot.com",
//     messagingSenderId: "550922698171",
//     appId: "1:550922698171:web:44a467aa7e1ef5ab81d89e"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyC5u7NgQtan1DkSjzBNdu5itahmDvkI6jo",
  authDomain: "mosahayworkerportal-19bf6.firebaseapp.com",
  databaseURL: "https://mosahayworkerportal-19bf6.firebaseio.com",
  projectId: "mosahayworkerportal-19bf6",
  storageBucket: "mosahayworkerportal-19bf6.appspot.com",
  messagingSenderId: "257889341335",
  appId: "1:257889341335:web:a9808a936a687482f17ed2",
  measurementId: "G-BZLBZKGBDR"
};
  
  export default function initFirebase() {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
  }