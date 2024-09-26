document.addEventListener('DOMContentLoaded', function () {
  const suites = ["Suíte 1", "Suíte 2", "Suíte 3"];
  const reservas = [
    { cliente: "Peter Silberman", suite: "Suíte 1", checkin: "2024-02-16", checkout: "2024-02-18", status: "Confirmado" },
    { cliente: "Enrique Salceda", suite: "Suíte 2", checkin: "2024-02-16", checkout: "2024-02-19", status: "Confirmado" },
  ];

  // Gerar os dias da semana
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const header = document.getElementById('header');
  dias.forEach(dia => {
    const div = document.createElement('div');
    div.innerText = dia;
    header.appendChild(div);
  });

  // Preencher suítes e dias
  const body = document.getElementById('body');
  suites.forEach(suite => {
    const suiteDiv = document.createElement('div');
    suiteDiv.className = 'suite';
    suiteDiv.innerText = suite;
    body.appendChild(suiteDiv);

    for (let i = 0; i < 7; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.className = 'day';
      body.appendChild(dayDiv);
    }
  });

  // Adicionar reservas
  reservas.forEach(reserva => {
    const suiteIndex = suites.indexOf(reserva.suite);
    const start = new Date(reserva.checkin).getDay();
    const end = new Date(reserva.checkout).getDay();

    for (let i = start; i <= end; i++) {
      const reservationDiv = body.children[suiteIndex * 8 + i + 1];
      reservationDiv.className = 'reservation';
      reservationDiv.innerText = reserva.cliente;

      // Detalhes ao passar o mouse
      reservationDiv.onmouseover = () => {
        reservationDiv.innerText = `${reserva.cliente} - Status: ${reserva.status}`;
      };
      reservationDiv.onmouseout = () => {
        reservationDiv.innerText = reserva.cliente;
      };
    }
  });
});
