import { useState } from 'react';
import { usePedido } from '../pedidoStore';
import { esquemaPedido } from '../esquemaPedido';

function FormPedido() {
  const { quantidade, total, limpar } = usePedido();
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  function enviar(evento) {
    evento.preventDefault();
    const dados = Object.fromEntries(new FormData(evento.target));
    const resultado = esquemaPedido.safeParse(dados);

    if (!resultado.success) {
      const novosErros = {};
      for (const erro of resultado.error.issues) {
        novosErros[erro.path[0]] = erro.message;
      }
      setErros(novosErros);
      setMensagem('');
      return;
    }

    if (quantidade === 0) {
      setErros({});
      setMensagem('Adicione pelo menos um item ao pedido.');
      return;
    }

    setErros({});
    setMensagem(`Obrigado, ${resultado.data.nome}! Pedido de ${quantidade} item(ns) enviado.`);
    limpar();
    evento.target.reset();
  }

  return (
    <>
      <h2 className="mb-2 text-2xl font-medium">Seu pedido</h2>
      <p className="mb-6 text-lg font-bold">
        {quantidade} item(ns) · Total: R$ {total.toFixed(2)}
      </p>

      <form onSubmit={enviar} noValidate className="mx-auto flex max-w-md flex-col gap-4 text-left">
        <label className="flex flex-col gap-1 font-medium">
          Nome
          <input
            name="nome"
            aria-invalid={Boolean(erros.nome)}
            aria-describedby="erro-nome"
            className="rounded-md border border-orange-300 bg-white px-3 py-2 font-normal"
          />
          <span id="erro-nome" className="text-sm font-normal text-red-700">{erros.nome}</span>
        </label>

        <label className="flex flex-col gap-1 font-medium">
          Telefone
          <input
            name="telefone"
            inputMode="numeric"
            aria-invalid={Boolean(erros.telefone)}
            aria-describedby="erro-telefone"
            className="rounded-md border border-orange-300 bg-white px-3 py-2 font-normal"
          />
          <span id="erro-telefone" className="text-sm font-normal text-red-700">{erros.telefone}</span>
        </label>

        <p className="flex gap-2">
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-orange-700 px-4 py-2 font-medium text-white hover:bg-orange-800"
          >
            Enviar pedido
          </button>
          <button
            type="button"
            onClick={limpar}
            className="cursor-pointer rounded-md border border-orange-700 px-4 py-2 font-medium text-orange-800 hover:bg-orange-100"
          >
            Limpar pedido
          </button>
        </p>
      </form>

      <p role="status" className="mt-4 font-medium text-green-800">{mensagem}</p>
    </>
  );
}

export default FormPedido;
