function camposCorrectos({cancha, dia, horario }) {
    if (cancha == "") {    
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no puedes dejar el campo "cancha" vacio!'
  });
  return false;
    }
    if (dia == "") {    
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no puedes dejar el campo "dia" vacio!'
  })
  return false;
    }
    if (horario == "") {    
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no puedes dejar el campo "horario" vacio!'
  })
  return false;
    }
    return true;
}