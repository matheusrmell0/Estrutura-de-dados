import countBy from '../countBy';

type TransacaoValue = Transacao & { moeda: number };
function filterValue(tras: Transacao): tras is TransacaoValue {
  return tras.moeda !== null;
}

export default class Stats {
  private transacoes: Transacao[];
  total: number;
  pagamento;
  status;
  semana;
  bestDay;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.valorTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setWeek();
    this.bestDay = this.setBestDay();
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
    return countBy(this.transacoes.map(({ status }) => status));
  }
  private setWeek() {
    const week = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    };

    this.transacoes.forEach(({ data }) => {
      const day = data.getDay();
      if (day === 0) return (week['Domingo'] += 1);
      if (day === 1) return (week['Segunda'] += 1);
      if (day === 2) return (week['Terça'] += 1);
      if (day === 3) return (week['Quarta'] += 1);
      if (day === 4) return (week['Quinta'] += 1);
      if (day === 5) return (week['Sexta'] += 1);
      if (day === 6) return (week['Sábado'] += 1);
      else return null;
    });
    return week;
  }
  private setBestDay() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
