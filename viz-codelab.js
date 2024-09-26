// Simulação de inicialização de dados
let data = [
  { suite: 'Suíte 1', checkin: '2024-09-28', checkout: '2024-10-02', status: 'Confirmado' },
  { suite: 'Suíte 2', checkin: '2024-10-01', checkout: '2024-10-05', status: 'Finalizado' }
];

function drawCalendar(data) {
  const calendar = document.getElementById('calendar');
  data.forEach(reserva => {
    const div = document.createElement('div');
    div.innerHTML = `Reserva: ${reserva.suite} - ${reserva.checkin} a ${reserva.checkout} (${reserva.status})`;
    calendar.appendChild(div);
  });
}

drawCalendar(data);
