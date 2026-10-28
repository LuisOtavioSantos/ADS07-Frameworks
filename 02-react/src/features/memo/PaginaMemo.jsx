import SemUseCallback from './SemUseCallback';
import ComUseCallback from './ComUseCallback';

function PaginaMemo() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-8 text-center text-neutral-800">
      <h1 className="text-3xl font-medium lg:text-5xl">useMemo e useCallback</h1>
      <p className="mt-2 mb-8">Clique em Adicionar dos dois lados e compare quantas vezes cada item renderizou.</p>

      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-lg border-2 border-dashed border-neutral-400 p-4">
          <h2 className="text-2xl font-medium">Sem useCallback</h2>
          <p className="mb-4 text-sm">A função adicionar é criada de novo a cada render: o memo vê uma prop nova.</p>
          <SemUseCallback />
        </article>

        <article className="rounded-lg border-2 border-orange-700 p-4">
          <h2 className="text-2xl font-medium">Com useCallback (e useMemo na busca)</h2>
          <p className="mb-4 text-sm">A função adicionar é a mesma em todo render: só o total muda.</p>
          <ComUseCallback />
        </article>
      </section>

      <a href="/" className="mt-8 inline-block text-orange-800 underline">Voltar ao cardápio principal</a>
    </main>
  );
}

export default PaginaMemo;
