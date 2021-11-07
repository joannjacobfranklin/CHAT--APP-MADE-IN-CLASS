//YOUR FIREBASE LINKS
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

room_name = localStorage.getItem("room_name");
User_name = localStorage.getItem("User_name");
console.log("room name = " + room_name + "User_name = " + User_name);

function let_see(){
      msg = document.getElementById("msg_input").value;
      console.log("message" + msg)
      firebase.database().ref(room_name).push({
         username: User_name,
         message: msg,
         likes: 0,
      });
      document.getElementById("msg_input").innerHTML = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

   
   console.log(firebase_message_id);
   console.log(message_data);
   name = message_data['username'];
   message = message_data['message'];
   like = message_data['likes'];
   name_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
   message_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
   like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+"onclick = 'update_like(this.id)'>";
   span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>LIKE: " + like + "</span></button><hr>"; 
   row = name_tag + message_tag + like_button + span_tag;
   document.getElementById("output").innerHTML += row;
   
//End code
   } });  }); }
getData();

function update_like(name){

      console.log("cliked on like button in " + name);
      button_id = name;
      likes = document.getElementById(button_id).value;
      likes_update = Number(likes) + 1;
      
      fiebase.database().ref(room_name).child(name).update({
            likes : likes_update
      }); 
   
   }

   
   function logout(){
   
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
   }
   