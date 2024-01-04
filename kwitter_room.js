var firebaseConfig = {
    apiKey: "AIzaSyCvVLExxwGRfJvgvkGFxPPEMTCDByEmUxQ",
    authDomain: "kwitter-190c1.firebaseapp.com",
    databaseURL: "https://kwitter-190c1-default-rtdb.firebaseio.com",
    projectId: "kwitter-190c1",
    storageBucket: "kwitter-190c1.appspot.com",
    messagingSenderId: "800258725792",
    appId: "1:800258725792:web:95f72b736f2c18384036c5"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName() 
{
    localStorage.setItem("room_name", user_room);
    window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  window.location = "index.html";
}