/*$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
*/

function registrar() {
    $("#formulario1").validate({
        rules: {
            correo: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            var email = $('#correo').val();
            enviar(email);
            $('#myModal').modal();
            $('#correo').val('');

        }
    });


}


function registrar2() {
    $("#formulario3").validate({
        rules: {
            correo3: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo3: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            var email = $('#correo3').val();
            enviar(email);
            $('#myModal').modal();
            $('#correo3').val('');

        }
    });


}

function registrarMovil() {
    $("#formulario2").validate({
        rules: {
            correo2: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo2: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            }
        },
        submitHandler: function(form) {
            var email = $('#correo2').val();
            enviar(email);
            $('#myModal').modal();
            $('#correo2').val('');

        }
    });


}

function registrarMovil2() {
    $("#formulario4").validate({
        rules: {
            correo4: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo4: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            }
        },
        submitHandler: function(form) {
            var email = $('#correo4').val();
            enviar(email);
            $('#myModal').modal();
            $('#correo4').val('');

        }
    });


}

/*function registrar1() {
    enviar1();
    $('#myModal').modal();
}*/

/** BEGIN Formulario de registro */
function abrirForm() {
    $('#modalForm').modal();
}
/** END Formulario de registro */



const urlGuardar = 'https://script.google.com/macros/s/AKfycbxD2r8qY9sZEFwRNJQg9OsvDQoWi9zLiAnZp3FDHMiJ2bvnENc/exec';

/***Hoja de calculo */
function enviar(email) {
    var data = new FormData();
    data.append("tipo", "REGISTRO");
    data.append("correo", email);
    //data.append("correo", document.getElementById("correo").value);
    //data.append("telefono", document.getElementById("telefono").value);
    //data.append("ciudad", document.getElementById("ciudad").value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://script.google.com/macros/s/AKfycbx4dQyYw0ZrJMNleMgEAKnMmHZO8Pc2ZJ-NTeJCiwebV2c3M3A/exec");

    xhr.send(data);
}

function enviar1() {
    var data = new FormData();
    data.append("tipo", "REGISTRO");
    data.append("correo", document.getElementById("correo1").value);
    //     data.append("correo", document.getElementById("correo").value);
    //   data.append("telefono", document.getElementById("telefono").value);
    // data.append("ciudad", document.getElementById("ciudad").value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://script.google.com/macros/s/AKfycbx4dQyYw0ZrJMNleMgEAKnMmHZO8Pc2ZJ-NTeJCiwebV2c3M3A/exec");

    xhr.send(data);
}


function enviarForm() {
    $("#formulario5").validate({
        rules: {
            nombres: {
                required: true
            },
            correo5: {
                required: true,
                email: true,

            },
            telefono: {
                required: true

            },
            ciudad: {
                required: true

            }
        },
        messages: {
            nombres: {
                required: "Ingresar nombre completo",
            },
            correo5: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            },
            telefono: {
                required: "Ingresar teléfono",

            },
            ciudad: {
                required: "Ingresar ciudad",

            }
        },
        submitHandler: function(form) {
            var email5 = $('#correo5').val();
            var nombres = $('#nombres').val();
            var telefono = $('#telefono').val();
            var ciudad = $('#ciudad').val();
            var data = new FormData();
            data.append("tipo", "ASISTENTE");
            data.append("correo", email5);
            data.append("nombres", nombres);
            data.append("telefono", telefono);
            data.append("ciudad", ciudad);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    $('#correo5').val('');
                    $('#nombres').val('');
                    $('#telefono').val('');
                    $('#ciudad').val('');
                    $('#modalForm').modal('hide');
                    $('#myModal').modal();
                }
            });

            xhr.open("POST", "https://script.google.com/macros/s/AKfycbx4dQyYw0ZrJMNleMgEAKnMmHZO8Pc2ZJ-NTeJCiwebV2c3M3A/exec");
            xhr.send(data);
            enviar(email5);
            //$('#myModal').modal();
            //$('#correo5').val('');

        }
    });




}