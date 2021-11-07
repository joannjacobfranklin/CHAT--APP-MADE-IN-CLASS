var firebaseConfig = {
      apiKey: "AIzaSyAUzoZtC8nil5erIXq9u80P8MxOT6rWUlc",
      authDomain: "chat-app-9b39e.firebaseapp.com",
      databaseURL: "https://chat-app-9b39e-default-rtdb.firebaseio.com",
      projectId: "chat-app-9b39e",
      storageBucket: "chat-app-9b39e.appspot.com",
      messagingSenderId: "555486925206",
      appId: "1:555486925206:web:a1c8b468b56d5adffd4db7",
      measurementId: "G-P7CZH0F7MF"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function AddRoom(){
    
      room_name = document.getElementById("room_name").value;

      console.log(room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          
          console.log("room_name - " + Room_names);
          row = "<div class = 'room_names' id = '" + Room_names + "' onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
