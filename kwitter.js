function add_user(){
    User_name = document.getElementById("user_name").value;
    localStorage.setItem( "User_name" , User_name);
    window.location = "kwitter_room.html";
}