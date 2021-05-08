// import { useEffect} from 'react';
// import firebase from "firebase/app";
// import initFirebase from "./firebaseConfig";
// import "firebase/auth";
// import Cookies from 'universal-cookie';

// export const CookieProvider = () => {
//     initFirebase(); 

//     const cookies = new Cookies();
//     useEffect(() => {
// 		return firebase.auth().onIdTokenChanged(async user => {
// 			if (user) {
			
// 			const token = await user.getIdToken();
//             cookies.set('acess_token', token, { path: '/',  maxAge: 60 * 60});
//             console.log("new cookies")
// 			}
// 		});
// 	});

// }