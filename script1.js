//Function to display an alert message
function alertMessage(){
    alert("You Clicked the button!")
}

//Function to greet a user
function greeting(){
    let name = prompt("Please enter your name");
    if(name){
        alert(`Hello ${name} !`);
    } else {
        alert("You didn't enter a name")
    }
}

//Function to change the div content
function changeContent(){
    const divElement = document.getElementById("changeContent")
    divElement.textContent= "Great! the text is changed";
}

//Function to add an item to unordered list
function addItem() {
    const item = prompt("Enter a new item");
    if(item){
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    } 
}

//Function to change a image src
function changeImage(){
    var src1 = "https://cdn.pixabay.com/photo/2018/02/19/00/14/tree-lined-path-3163913_640.jpg";
    var src2 = "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
    let img = document.getElementById("img"); 
    if(img.src == src1)
        img.src = src2;
    else
        img.src = src1;
}

//Function to validate the login data
function validate(){
    let username = document.getElementById("loginForm").username.value;
    let pass = document.getElementById("loginForm").pass.value;
    if(username === "Yara" && pass === "1234")
        alert("You are logged in");
    else
    console.log("Somthing wrong! try again");  
        
}

