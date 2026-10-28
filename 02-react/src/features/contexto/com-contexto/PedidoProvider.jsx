import { useState } from 'react';
import { PedidoContext } from './PedidoContext';

function PedidoProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);

  function adicionar(item) {
    setQuantidade(quantidade + 1);
    setTotal(total + item.preco);
  }

  function limpar() {
    setQuantidade(0);
    setTotal(0);
  }

  return (
    <PedidoContext.Provider value={{ quantidade, total, adicionar, limpar }}>
      {children}
    </PedidoContext.Provider>
  );
}

export default PedidoProvider;
