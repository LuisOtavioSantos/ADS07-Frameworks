import { useState } from 'react';
import ListaSemContexto from './ListaSemContexto';
import ResumoSemContexto from './ResumoSemContexto';

function CardapioSemContexto() {
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
    <>
      <ListaSemContexto onAdicionar={adicionar} />
      <ResumoSemContexto quantidade={quantidade} total={total} onLimpar={limpar} />
    </>
  );
}

export default CardapioSemContexto;
