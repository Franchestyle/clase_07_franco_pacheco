class Reserva {
    constructor(cancha, dia, horario) {
        this.cancha = cancha;
        this.dia = dia;
        this.horario = horario;
    }
}

let reservas = JSON.parse(localStorage.getItem("reservas")) ?? [];
document.getElementById("formulario-reserva").addEventListener("submit", reservar)

function reservar(e) {
    e.preventDefault();
    const formulario = new FormData(e.target);
    const cancha = formulario.get("cancha");
    const dia = formulario.get("dia");
    const horario = formulario.get("horario");

    const reserva = new Reserva(cancha, dia, horario);

    if(camposCorrectos(reserva)) {
        reservas.push(reserva)
        localStorage.setItem("reservas", JSON.stringify(reservas));
        mostrarHistorial();
        e.target.reset();
    }
}

function mostrarHistorial() {
    let historialReservas = document.getElementById("historialDeReservas");
    historialReservas.innerHTML = "";

    reservas.forEach(({cancha, dia, horario}) => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr>
        ${cancha} - 
        ${dia} - 
        ${horario} + " Hs" `;

        const botonCancelar = document.createElement("button");
        botonCancelar.innerText = "Borrar";
        botonCancelar.addEventListener("click", () => {
            cancelarReserva(cancha);
        })
        li.appendChild(botonCancelar);

        historialReservas.appendChild(li);
    });
}

function cancelarReserva(cancha){
    Swal.fire({
        title: 'Estas seguro que quieres cancelar?',
        text: "Podrias no encontrar este horario la proxima vez :(",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancelado!',
            'Su reserva ha sido cancelada.',
            ':)'
          )
        }
      })
}

mostrarHistorial()