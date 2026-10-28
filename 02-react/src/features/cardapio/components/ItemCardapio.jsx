function ItemCardapio({ item, onAdicionar }) {
  return (
    <li className="rounded-lg border border-orange-200 bg-white p-4">
      <h3 className="mb-1 text-xl font-bold">{item.nome}</h3>
      <p className="mb-3 text-lg">R$ {item.preco.toFixed(2)}</p>
      <button
        className="cursor-pointer rounded-md bg-orange-700 px-4 py-2 text-sm font-medium text-white hover:bg-orange-800"
        onClick={() => onAdicionar(item)}
      >
        Adicionar
      </button>
    </li>
  );
}

export default ItemCardapio;
