
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnQmZJqqa7KhZ-ApwPOnUtHsJwKW5sHPY",
  authDomain: "letschat-fbd64.firebaseapp.com",
  databaseURL: "https://letschat-fbd64-default-rtdb.firebaseio.com",
  projectId: "letschat-fbd64",
  storageBucket: "letschat-fbd64.appspot.com",
  messagingSenderId: "909971503350",
  appId: "1:909971503350:web:59a581815eb340aaf6d4d7",
  measurementId: "G-54167MTWP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
