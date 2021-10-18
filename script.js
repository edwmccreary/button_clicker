function remove(element) {
    element.remove();
}

function login(element) {
    if(element.innerText == "Login"){
        element.innerText = "Log Out";
    }
    else{
        element.innerText = "Login";
    }
    
}

function like(element){
    alert("Ninja was liked");
}