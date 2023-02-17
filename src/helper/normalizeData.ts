import changeCoin from "./changeCoin";

export default function normalizeData(data: TransacaoAPI): Transacao {
  return {
    status: data.Status,
    id: data.ID,
    data: data.Data.replace('/', '.').replace('/', '.'),
    nome: data.Nome,
    formaDePagamento: data['Forma de Pagamento'],
    email: data.Email,
    valor: data["Valor (R$)"],
    moeda: changeCoin(data["Valor (R$)"]),
    clienteNovo: data['Cliente Novo'] === 1 ? true : false,
  };
}
