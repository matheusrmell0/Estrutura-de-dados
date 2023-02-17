interface Transacao {
  status: Status
  id: number
  data: string
  nome: string
  formaDePagamento: Pagamento
  email: string
  valor: string
  moeda: number | null
  clienteNovo: boolean
}

type Status =
  | 'Paga'
  | 'Recusada pela operadora de cartão'
  | 'Aguardando pagamento'
  | 'Estornada';
type Pagamento = 'Boleto' | 'Cartão de Crédito';

interface TransacaoAPI {
  Status: Status;
  ID: number;
  Data: string;
  Nome: string;
  ['Forma de Pagamento']: Pagamento;
  Email: string;
  ['Valor (R$)']: string;
  ['Cliente Novo']: 1 | 0;
}