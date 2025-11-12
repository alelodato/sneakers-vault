export default function Privacy() {
  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading text-white">Privacy Policy</h1>
        <p className="mt-3 text-neutral-300 font-body">Informativa ai sensi del Reg. (UE) 2016/679 (GDPR).</p>

        <div className="prose prose-invert max-w-none mt-6">
          <h2 className="font-heading">1. Titolare del trattamento</h2>
          <p className="font-body">Sneakers Vault — email: support@sneakersvault.dev</p>

          <h2 className="font-heading">2. Dati trattati</h2>
          <p className="font-body">Dati di contatto, transazionali, tecnici (IP anonimizzato se analytics abilitate).</p>

          <h2 className="font-heading">3. Finalità e basi giuridiche</h2>
          <ul className="font-body">
            <li>Evasione ordini e assistenza clienti (contratto).</li>
            <li>Prevenzione frodi e sicurezza (legittimo interesse).</li>
            <li>Analytics anonime (consenso).</li>
          </ul>

          <h2 className="font-heading">4. Conservazione</h2>
          <p className="font-body">Per il tempo necessario alle finalità e/o obblighi di legge.</p>

          <h2 className="font-heading">5. Diritti</h2>
          <p className="font-body">Accesso, rettifica, cancellazione, portabilità: support@sneakersvault.dev.</p>

          <h2 className="font-heading">6. Trasferimenti</h2>
          <p className="font-body">Eventuali fornitori extra-UE con adeguate garanzie (SCC).</p>

          <h2 className="font-heading">7. Cookie</h2>
          <p className="font-body">Vedi <a href="/cookie">Cookie Policy</a> e gestisci nella <a href="/cookie-preferences">Cookie Board</a>.</p>
        </div>
      </section>
    </main>
  );
}
