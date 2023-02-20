import checkInterface from './helper/checkInterface';
import Stats from './helper/classes/Stats';

export default function preencherStats(state: Transacao[]): void {
  if (state && checkInterface(state)) {
    const userStats = document.querySelector('#userstats');
    if (!userStats) return;
    const data = new Stats(state);
    const pagamento = Object.keys(data.pagamento);
    const status = Object.keys(data.status);

    userStats.innerHTML = `
    <li>Total: ${data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</li>
    ${pagamento
      .map((key) => `<li>${key}: ${data.pagamento[key].toString()}</li>`)
      .slice(0, 1)}
    ${pagamento
      .map((key) => `<li>${key}: ${data.pagamento[key].toString()}</li>`)
      .slice(1)}
    ${status
      .map((stat) => `<li>${stat}: ${data.status[stat]}</li>`)
      .slice(0, 1)}
      ${status
        .map((stat) => `<li>${stat}: ${data.status[stat]}</li>`)
        .slice(1, 2)}
        ${status
          .map((stat) => `<li>${stat}: ${data.status[stat]}</li>`)
          .slice(2, 3)}
          ${status
            .map((stat) => `<li>${stat}: ${data.status[stat]}</li>`)
            .slice(3, 4)}
            <li>Dias com mais vendas: ${
              data.bestDay[0]
            }</li>
    `;
  }
}
