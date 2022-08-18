// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAorIFVrXi81E4mshW6wok30MmwT3uGwzs",
    authDomain: "kwiter-237f3.firebaseapp.com",
    databaseURL: "https://kwiter-237f3-default-rtdb.firebaseio.com",
    projectId: "kwiter-237f3",
    storageBucket: "kwiter-237f3.appspot.com",
    messagingSenderId: "291720366838",
    appId: "1:291720366838:web:d033886d32abb178317ad7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



