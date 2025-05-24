function validarLogin() {
    var usuario = document.getElementById("loginUser").value;
    var contrasena = document.getElementById("loginPassword").value;

    if (usuario === "admin@admin.com" && contrasena === "admin") {
      window.location.href = "perfil-admin.html";
    } else {
      window.location.href = "perfil.html";
    }
  }