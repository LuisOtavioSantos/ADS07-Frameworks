import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Section from './components/layout/Section';
import Mensagem from './components/Mensagem';
import { Cardapio } from './features/cardapio';
import { FormPedido } from './features/pedido';

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-orange-50 text-neutral-800">
        <Section>
          <Mensagem />
        </Section>
        <Section id="cardapio">
          <Cardapio />
        </Section>
        <Section id="pedido">
          <FormPedido />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
