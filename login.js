const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    const user =
    document.getElementById("user").value;

    const password =
    document.getElementById("password").value;

    // VALIDAÇÃO

    if(user === "" || password === ""){

        alert("Preencha todos os campos!");

    }

    else{

        alert("Login realizado com sucesso!");

        // REDIRECIONAR

        window.location.href = "index.html";
    }

});