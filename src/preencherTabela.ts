import checkInterface from './helper/checkInterface';
import changeCoin from './helper/changeCoin';

export default function preencherTabela(trans: Transacao[]): void {
  if (trans && checkInterface<Transacao>(trans)) {
    const tbody = document.querySelector('#tbody');
    if (!tbody) return;

    trans.map(({ nome, email, valor, formaDePagamento, status, moeda }) => {
      changeCoin(valor);
        tbody.innerHTML += `
    <table class="dados"> 
    <td id='nome'>${nome}</td>
    <td>${email}</td>
    <td  ${moeda && moeda > 0 ? '' : `style="color: red;"`} >R$ ${valor}</td>
    <td>${formaDePagamento}</td>
    <td>${status}</td>
    </table>`;
    });
  }
}
