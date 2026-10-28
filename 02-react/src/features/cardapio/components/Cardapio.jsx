import ItemCardapio from './ItemCardapio';
import { itens } from '../itens';
import { usePedido } from '../../pedido';

function Cardapio() {
  const { adicionar } = usePedido();

  return (
    <>
      <h2 className="mb-4 text-2xl font-medium">Cardápio</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item) => (
          <ItemCardapio key={item.id} item={item} onAdicionar={adicionar} />
        ))}
      </ul>
    </>
  );
}

export default Cardapio;
