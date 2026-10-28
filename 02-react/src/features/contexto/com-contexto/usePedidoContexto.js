import { useContext } from 'react';
import { PedidoContext } from './PedidoContext';

export function usePedidoContexto() {
  return useContext(PedidoContext);
}
