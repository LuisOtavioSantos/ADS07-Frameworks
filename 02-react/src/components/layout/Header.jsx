import { usePedido } from '../../features/pedido';

function Header() {
  const { quantidade, total } = usePedido();

  return (
    <header className="sticky top-0 flex flex-wrap items-center justify-between gap-2 bg-orange-700 px-6 py-4 text-white">
      <p className="text-xl font-bold">Sabor da Esquina</p>
      <nav className="flex gap-4">
        <a href="#cardapio" className="hover:underline">Cardápio</a>
        <a href="#pedido" className="hover:underline">Pedido</a>
      </nav>
      <p className="font-medium">
        {quantidade} item(ns) · R$ {total.toFixed(2)}
      </p>
    </header>
  );
}

export default Header;
