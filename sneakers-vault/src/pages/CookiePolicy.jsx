import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading text-white">Cookie Policy</h1>
        <p className="mt-3 text-neutral-300 font-body">Informazioni sull’uso dei cookie.</p>

        <div className="prose prose-invert max-w-none mt-6">
          <h2 className="font-heading">Che cosa sono</h2>
          <p className="font-body">Piccoli file per funzionalità, preferenze e misurazioni.</p>

          <h2 className="font-heading">Tipologie</h2>
          <ul className="font-body">
            <li><strong>Necessari</strong>: login, carrello, sicurezza.</li>
            <li><strong>Analytics</strong>: statistiche aggregate/anonime.</li>
            <li><strong>Marketing</strong>: pixel/remarketing (se presenti).</li>
          </ul>

          <h2 className="font-heading">Gestione</h2>
          <p className="font-body">
            Modifica il consenso dalla <Link to="/cookie-preferences">Cookie Board</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
