import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB8PNSDqyTYtyQntMuz_1tiMpBlO3XZ5hI",
    authDomain: "crud-firebase-1126b.firebaseapp.com",
    databaseURL: "https://crud-firebase-1126b-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-1126b",
    storageBucket: "crud-firebase-1126b.appspot.com",
    messagingSenderId: "837014101688",
    appId: "1:837014101688:web:a31ac09900dd470cdd1e4d"
  };
  // Initialize Firebase
  var fireDB=firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();
