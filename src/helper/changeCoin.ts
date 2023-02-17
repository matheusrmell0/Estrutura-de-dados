/**
 * Recebe um valor em string '1.200,50' padrão Real(BRL) retorna number '1200.50'
 * @param value string
 * @returns number
 */
export default function changeCoin(value: string): number | null {
  const coin = Number(value.replaceAll('.', '').replace(',', '.'));
  return isNaN(coin) ? null : coin;
}
