import preencherTabela from './helper/preencherTabela';
import fetchData from './helper/fetchAPI';
import normalizeData from './helper/normalizeData';

const hadleData = async () => {
  const transacoesAPI = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?',
  );
  if (!transacoesAPI) return;
  const transacoes = transacoesAPI.map(normalizeData);
  preencherTabela(transacoes);
};
hadleData();
