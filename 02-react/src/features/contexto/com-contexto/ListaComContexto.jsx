import ItemComContexto from './ItemComContexto';
import { itens } from '../../cardapio/itens';

function ListaComContexto() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {itens.map((item) => (
        <ItemComContexto key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ListaComContexto;
