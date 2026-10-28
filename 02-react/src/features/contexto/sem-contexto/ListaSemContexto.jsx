import ItemCardapio from '../../cardapio/components/ItemCardapio';
import { itens } from '../../cardapio/itens';

function ListaSemContexto({ onAdicionar }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {itens.map((item) => (
        <ItemCardapio key={item.id} item={item} onAdicionar={onAdicionar} />
      ))}
    </ul>
  );
}

export default ListaSemContexto;
