
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyAlW945LT_IxDX6B0IZcITzzWAORMGIdaM",
  authDomain: "chat-2-4c7aa.firebaseapp.com",
  databaseURL: "https://chat-2-4c7aa-default-rtdb.firebaseio.com",
  projectId: "chat-2-4c7aa",
  storageBucket: "chat-2-4c7aa.appspot.com",
  messagingSenderId: "936666514101",
  appId: "1:936666514101:web:2899b290c6cf53246bf4fc",
  measurementId: "G-7P6BPDEMWH"
};
      //Inicia el código

      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Te damos la bienvenida, " + user_name + "!!";

      function addRoom(){
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({ purpose: "agregando el nombre de la sala" });
            localStorage.setItem("room_name", room_name);

            //window.location = "kwitter_page.html";
      }

      

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;

      console.log("Nombre de la sala ", Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectionToRoomName(this.id)' > #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Finaliza el código
      });});}

getData();
function redirectionToRoomName(name) {
      console.log (name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location ="index.html";
}

