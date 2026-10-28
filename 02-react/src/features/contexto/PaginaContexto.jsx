import CardapioSemContexto from './sem-contexto/CardapioSemContexto';
import CardapioComContexto from './com-contexto/CardapioComContexto';

function PaginaContexto() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-8 text-center text-neutral-800">
      <h1 className="text-3xl font-medium lg:text-5xl">Contexto no React</h1>
      <p className="mt-2 mb-8">Os dois cardápios fazem a mesma coisa. Muda o caminho que o pedido percorre.</p>

      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-lg border-2 border-dashed border-neutral-400 p-4">
          <h2 className="text-2xl font-medium">Sem contexto</h2>
          <p className="mb-4 text-sm">CardapioSemContexto → ListaSemContexto → ItemCardapio: a função desce por props.</p>
          <CardapioSemContexto />
        </article>

        <article className="rounded-lg border-2 border-orange-700 p-4">
          <h2 className="text-2xl font-medium">Com contexto</h2>
          <p className="mb-4 text-sm">PedidoProvider guarda o pedido; ItemComContexto e ResumoComContexto pegam direto.</p>
          <CardapioComContexto />
        </article>
      </section>

      <a href="/" className="mt-8 inline-block text-orange-800 underline">Voltar ao cardápio principal</a>
    </main>
  );
}

export default PaginaContexto;
