document.getElementById("boton1").addEventListener("click", () => agregar());
function agregar() {
  let fd = new FormData();
  fd.append("foto", document.getElementById("foto").files[0]);
  fetch('subirfoto.php', {
      method: 'POST',
      body: fd
  })
      .then(response => response.json())
      .then(datos => {
          if (datos.resultado == "Ok")
              document.getElementById("imagen").setAttribute("src", document.getElementById("foto").files[0].name);
  })
  }
 
  let edad;
    edad= prompt ("ingrese su edad");
    if (edad >= 18){
        alert("podes ingresar");
    }else{
        alert("no puedes ingresar");
    }