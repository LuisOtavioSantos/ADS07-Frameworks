function ResumoSemContexto({ quantidade, total, onLimpar }) {
  return (
    <>
      <p className="mt-4 text-lg font-bold">
        {quantidade} item(ns) · Total: R$ {total.toFixed(2)}
      </p>
      <button
        className="mt-2 cursor-pointer rounded-md border border-orange-700 px-4 py-2 font-medium text-orange-800 hover:bg-orange-100"
        onClick={onLimpar}
      >
        Limpar pedido
      </button>
    </>
  );
}

export default ResumoSemContexto;
