import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDjKiC7fF8C_pAHYouaeTDDB9kR_jHYZK8",
        authDomain: "clone-b7bab.firebaseapp.com",
        databaseURL: "https://clone-b7bab.firebaseio.com",
        projectId: "clone-b7bab",
        storageBucket: "clone-b7bab.appspot.com",
        messagingSenderId: "351738737266",
        appId: "1:351738737266:web:2f47ae4731b24a5e9a08eb",
        measurementId: "G-M77DP8KQJF"
});

//const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{ auth}
//export{ db, auth}