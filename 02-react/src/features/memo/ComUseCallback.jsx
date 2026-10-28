import { useCallback, useMemo, useState } from 'react';
import ItemMemo from './ItemMemo';
import { itens } from '../cardapio/itens';

function ComUseCallback() {
  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);
  const [busca, setBusca] = useState('');

  const adicionar = useCallback((item) => {
    setQuantidade((atual) => atual + 1);
    setTotal((atual) => atual + item.preco);
  }, []);

  const filtrados = useMemo(
    () => itens.filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase())),
    [busca]
  );

  return (
    <>
      <input
        className="mb-3 w-full rounded-md border border-orange-300 bg-white px-3 py-2"
        placeholder="Buscar no cardápio"
        aria-label="Buscar no cardápio"
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {filtrados.map((item) => (
          <ItemMemo key={item.id} item={item} onAdicionar={adicionar} />
        ))}
      </ul>
      <p className="mt-4 text-lg font-bold">
        {quantidade} item(ns) · Total: R$ {total.toFixed(2)}
      </p>
    </>
  );
}

export default ComUseCallback;
