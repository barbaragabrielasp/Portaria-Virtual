var users = [
    {
        username: "admin",
        password: "admin",
        id: 0
    },
    {
        username: "barbara",
        password: "admin",
        id: 1
    },
    {
        username: "matheus",
        password: "admin",
        id: 2
    },
    {
        username: "pedro",
        password: "admin",
        id: 3
    },
    {
        username: "valmir",
        password: "admin",
        id: 4
    },
    {
        username: "renata",
        password: "admin",
        id: 5
    },
    {
        username: "luisheloy",
        password: "admin",
        id: 6
    },
    {
        username: "nikolatesla",
        password: "admin",
        id: 7
    }
]
var current = new Date();
var current_id

var generate_area = document.getElementById("generate_area");

login_area.style.visibility = "visible";
generate_area.style.visibility = "hidden";

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for(i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            // user logged in
            // document.location.href = "logged.html";
            generate_area.style.visibility = "visible";
            userInfo(users[i].id);
            current_id = users[i].id;
            return;
        }
    }
    console.log("Wrong username or password. Please Try again.");
}

function userInfo(user_id) {
    alert("user " + users[user_id].username + " logged in successfully");
}

function generateCode() {
    var user_id = current_id;
    var building_id = document.getElementById("select_building").value;
    var room_id = document.getElementById("select_room").value;
    var passphrase = "viva-la-revolucion";
    var generated_time = new Date();
    generated_time = current.toLocaleTimeString();

    var code = user_id + ":" + building_id + ":" + room_id + ":" + generated_time + ":" + passphrase;
    alert(btoa(String(code)));
    alert(code);
}