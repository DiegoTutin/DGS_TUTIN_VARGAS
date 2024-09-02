function cambiarTipoDocumento() {
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var documentoInput = document.getElementById('documento');
    documentoInput.value = '';
    document.getElementById('errorDocumento').textContent = '';
    if (tipoDocumento === 'cedula') {
        documentoInput.maxLength = 10;
    } else {
        documentoInput.maxLength = 13;
    }
}

function validarFormulario() {
    var valid = true;

    // Validación del Número de Documento
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var documento = document.getElementById('documento').value;
    var errorDocumento = document.getElementById('errorDocumento');
    if (documento === '') {
        errorDocumento.textContent = 'El número de documento no puede estar vacío.';
        valid = false;
    } else if ((tipoDocumento === 'cedula' && !/^\d{10}$/.test(documento)) || 
               (tipoDocumento === 'ruc' && !/^\d{13}$/.test(documento))) {
        errorDocumento.textContent = 'Ingrese un número de documento válido.';
        valid = false;
    } else {
        errorDocumento.textContent = '';
    }

    // Validación del Nombre
    var nombre = document.getElementById('nombre').value;
    var errorNombre = document.getElementById('errorNombre');
    if (nombre === '') {
        errorNombre.textContent = 'El nombre no puede estar vacío.';
        valid = false;
    } else if (nombre.length < 3 || nombre.length > 30 || !/^[a-zA-Z]+$/.test(nombre)) {
        errorNombre.textContent = 'El nombre debe tener entre 3 y 30 caracteres y solo letras.';
        valid = false;
    } else {
        errorNombre.textContent = '';
    }

    // Validación del Apellido
    var apellido = document.getElementById('apellido').value;
    var errorApellido = document.getElementById('errorApellido');
    if (apellido === '') {
        errorApellido.textContent = 'El apellido no puede estar vacío.';
        valid = false;
    } else if (apellido.length < 3 || apellido.length > 30 || !/^[a-zA-Z]+$/.test(apellido)) {
        errorApellido.textContent = 'El apellido debe tener entre 3 y 30 caracteres y solo letras.';
        valid = false;
    } else {
        errorApellido.textContent = '';
    }

    // Validación del Teléfono
    var telefono = document.getElementById('telefono').value;
    var errorTelefono = document.getElementById('errorTelefono');
    if (telefono === '') {
        errorTelefono.textContent = 'El teléfono no puede estar vacío.';
        valid = false;
    } else if (!/^\d{10}$/.test(telefono)) {
        errorTelefono.textContent = 'El teléfono debe tener 10 dígitos numéricos.';
        valid = false;
    } else {
        errorTelefono.textContent = '';
    }

    // Validación de la Fecha de Nacimiento
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    if (fechaNacimiento === '') {
        errorFechaNacimiento.textContent = 'La fecha de nacimiento no puede estar vacía.';
        valid = false;
    } else if (fechaNacimientoDate > fechaActual || fechaNacimientoDate < new Date('1900-01-01')) {
        errorFechaNacimiento.textContent = 'La fecha de nacimiento debe estar entre 01/01/1900 y la fecha actual.';
        valid = false;
    } else {
        errorFechaNacimiento.textContent = '';
    }

    // Validación del Salario
    var salario = document.getElementById('salario').value;
    var errorSalario = document.getElementById('errorSalario');
    if (salario === '') {
        errorSalario.textContent = 'El salario no puede estar vacío.';
        valid = false;
    } else if (salario < 450 || salario > 5000) {
        errorSalario.textContent = 'El salario debe estar entre el salario básico y 5000.';
        valid = false;
    } else {
        errorSalario.textContent = '';
    }

    // Validación del Email
    var email = document.getElementById('email').value;
    var errorEmail = document.getElementById('errorEmail');
    if (email === '') {
        errorEmail.textContent = 'El email no puede estar vacío.';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorEmail.textContent = 'Ingrese un correo electrónico válido.';
        valid = false;
    } else {
        errorEmail.textContent = '';
    }

    // Validación de la Dirección Web
    var direccionWeb = document.getElementById('direccionWeb').value;
    var errorDireccionWeb = document.getElementById('errorDireccionWeb');
    if (direccionWeb === '') {
        errorDireccionWeb.textContent = 'La dirección web no puede estar vacía.';
        valid = false;
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(direccionWeb)) {
        errorDireccionWeb.textContent = 'Ingrese una URL válida.';
        valid = false;
    } else {
        errorDireccionWeb.textContent = '';
    }

    // Validación de la Contraseña
    var password = document.getElementById('password').value;
    var errorPassword = document.getElementById('errorPassword');
    if (password === '') {
        errorPassword.textContent = 'La contraseña no puede estar vacía.';
        valid = false;
    } else if (password.length < 8 || password.length > 12 || 
               !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
        errorPassword.textContent = 'La contraseña debe tener entre 8 y 12 caracteres y contener al menos una letra mayúscula, una minúscula, un número y un carácter especial.';
        valid = false;
    } else {
        errorPassword.textContent = '';
    }

    return valid;
}
