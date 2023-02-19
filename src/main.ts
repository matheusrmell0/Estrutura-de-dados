import preencherTabela from './preencherTabela';
import fetchData from './helper/fetchAPI';
import normalizeData from './helper/normalizeData';
import dateFormat from './helper/dateFormat';
import preencherStats from './preencherStats';

const hadleData = async () => {
  const transacoesAPI = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?',
  );
  if (!transacoesAPI) return;
  const transacoes = transacoesAPI.map(normalizeData);
  preencherTabela(transacoes);
  preencherStats(transacoes)
};
hadleData();
