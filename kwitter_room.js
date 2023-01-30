// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyACXLjxs8cDhCLWEP2kVeZ0TIxguLrdIDs",
      authDomain: "social-website-3eb90.firebaseapp.com",
      databaseURL: "https://social-website-3eb90-default-rtdb.firebaseio.com",
      projectId: "social-website-3eb90",
      storageBucket: "social-website-3eb90.appspot.com",
      messagingSenderId: "974985185008",
      appId: "1:974985185008:web:511701c5cc3ed49a186435"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
