function login(){
    let user= document.getElementById("usuario").value;
    let pass= document.getElementById("clave").value;
    if(user.trim() !== "" && pass.trim() !== "") {
        window.location = "index.html";
    } else {
        alert("Por favor, ingrese usuario y contraseña.");
    }
}