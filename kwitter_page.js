//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCvVLExxwGRfJvgvkGFxPPEMTCDByEmUxQ",
      authDomain: "kwitter-190c1.firebaseapp.com",
      databaseURL: "https://kwitter-190c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-190c1",
      storageBucket: "kwitter-190c1.appspot.com",
      messagingSenderId: "800258725792",
      appId: "1:800258725792:web:95f72b736f2c18384036c5"
    };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}