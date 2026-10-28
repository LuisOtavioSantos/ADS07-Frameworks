import ItemCardapio from '../../cardapio/components/ItemCardapio';
import { usePedidoContexto } from './usePedidoContexto';

function ItemComContexto({ item }) {
  const { adicionar } = usePedidoContexto();

  return <ItemCardapio item={item} onAdicionar={adicionar} />;
}

export default ItemComContexto;
