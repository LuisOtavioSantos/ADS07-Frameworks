import { useState } from 'react';
import ItemMemo from './ItemMemo';
import { itens } from '../cardapio/itens';

function SemUseCallback() {
  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);

  function adicionar(item) {
    setQuantidade(quantidade + 1);
    setTotal(total + item.preco);
  }

  return (
    <>
      <ul className="grid gap-3 sm:grid-cols-2">
        {itens.map((item) => (
          <ItemMemo key={item.id} item={item} onAdicionar={adicionar} />
        ))}
      </ul>
      <p className="mt-4 text-lg font-bold">
        {quantidade} item(ns) · Total: R$ {total.toFixed(2)}
      </p>
    </>
  );
}

export default SemUseCallback;
