var Name = "maugwan";

document.getElementById("userName").innerHTML=Name;


function changeName() {
    this.userName = document.getElementById("userInput").value;
    document.getElementById("userName").innerHTML = 'Name : ' + this.userName;
}