import countBy from '../countBy';

type TransacaoValue = Transacao & { moeda: number };
function filterValue(tras: Transacao): tras is TransacaoValue {
  return tras.moeda !== null;
}

export default class Stats {
  private transacoes: Transacao[];
  total: number;
  pagamento;
  status
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.valorTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus()
  }
  private valorTotal() {
    return this.transacoes.filter(filterValue).reduce((acc, { moeda }) => {
      return (acc += moeda);
    }, 0);
  }
  private setPagamento() {
    return countBy(
      this.transacoes.map(({ formaDePagamento }) => formaDePagamento),
    );
  }
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status))
  }
}
