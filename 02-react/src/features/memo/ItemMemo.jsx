import { memo, useEffect, useRef } from 'react';

function ItemMemo({ item, onAdicionar }) {
  const contador = useRef(0);
  const aviso = useRef(null);

  useEffect(() => {
    contador.current += 1;
    aviso.current.textContent = `renderizou ${contador.current} vez(es)`;
  });

  return (
    <li className="rounded-lg border border-orange-200 bg-white p-3">
      <h3 className="text-lg font-bold">{item.nome}</h3>
      <p>R$ {item.preco.toFixed(2)}</p>
      <p ref={aviso} className="my-2 text-sm font-medium text-red-700"></p>
      <button
        className="cursor-pointer rounded-md bg-orange-700 px-3 py-1 text-sm font-medium text-white hover:bg-orange-800"
        onClick={() => onAdicionar(item)}
      >
        Adicionar
      </button>
    </li>
  );
}

export default memo(ItemMemo);
