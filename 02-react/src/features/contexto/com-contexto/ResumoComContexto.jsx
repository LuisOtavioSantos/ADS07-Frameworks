import { usePedidoContexto } from './usePedidoContexto';

function ResumoComContexto() {
  const { quantidade, total, limpar } = usePedidoContexto();

  return (
    <>
      <p className="mt-4 text-lg font-bold">
        {quantidade} item(ns) · Total: R$ {total.toFixed(2)}
      </p>
      <button
        className="mt-2 cursor-pointer rounded-md border border-orange-700 px-4 py-2 font-medium text-orange-800 hover:bg-orange-100"
        onClick={limpar}
      >
        Limpar pedido
      </button>
    </>
  );
}

export default ResumoComContexto;
