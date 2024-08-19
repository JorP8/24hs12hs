function convertirHorario() {
  const time24 = document.getElementById("time24").value;
  const [horas, minutos] = time24.split(":");

  let horas12 = horas % 12 || 12; // Convierte a formato 12 horas
  const periodo = horas >= 12 ? "PM" : "AM"; // Determina si es AM o PM

  const resultado = `${horas12}:${minutos} ${periodo}`;
  document.getElementById("resultado").textContent =
    /* Horario en formato 12hs: */ resultado;
}
