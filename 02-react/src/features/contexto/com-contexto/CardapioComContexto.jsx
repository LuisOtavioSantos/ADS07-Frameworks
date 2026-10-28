import PedidoProvider from './PedidoProvider';
import ListaComContexto from './ListaComContexto';
import ResumoComContexto from './ResumoComContexto';

function CardapioComContexto() {
  return (
    <PedidoProvider>
      <ListaComContexto />
      <ResumoComContexto />
    </PedidoProvider>
  );
}

export default CardapioComContexto;
