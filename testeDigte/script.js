let nome = window.document.getElementById("nome");
let email = document.querySelector("#inputEmail");
let nomeOk = false;
let emailOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
        txtNome.style.fontSize = "12px";
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
        txtNome.style.fontSize = "12px";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        txtEmail.style.fontSize = "12px";
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        txtEmail.style.fontSize = "12px";
        emailOk = true;
    }
}

function enviar() {
    validaNome();
    validaEmail();

    if (!nomeOk || !emailOk) {
        alert("Preencha todos os campos corretamente!")
    } else {
        alert("Formulário enviado com sucesso!")
    }

}