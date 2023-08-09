function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
} 

document.addEventListener("DOMContentLoaded", function () {
    const Button = document.getElementById("regBtn");

    Button.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const terminos = document.getElementById("terminos").checked;

        validarDatosIngresados(nombre, apellido, email, password1, password2, terminos);
    });
});

function validarDatosIngresados(nombre, apellido, email, password1, password2, terminos) {
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {
        showAlertError();
    } else if (password1.length < 6) {
        showAlertError("La contraseña debe tener al menos 6 caracteres.");
    } else if (password1 !== password2) {
        showAlertError("Las contraseñas no coinciden.");
    } else {
        showAlertSuccess();
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
} 