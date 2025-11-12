import { useState } from "react";

export default function TracciaOrdine() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setResult({
      status: "In transito",
      eta: "2–3 giorni",
      carrier: "DHL",
      code: `SV-${orderId.toUpperCase()}`,
    });
  };

  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading text-white">Traccia Ordine</h1>
        <p className="mt-3 text-neutral-300 font-body">
          Inserisci il tuo numero d’ordine e l’email usata in fase di acquisto.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3 rounded-xl border border-white/10 bg-neutral-900/70 p-5">
          <input
            className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 text-white font-body"
            placeholder="Numero ordine (es. #SV1234)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <input
            className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 text-white font-body"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="w-full py-2 rounded-md bg-white text-neutral-900 font-heading">
            Cerca
          </button>
        </form>

        {result && (
          <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900/70 p-5 text-white">
            <div className="font-heading">
              Stato: <span className="text-emerald-400">{result.status}</span>
            </div>
            <div className="text-neutral-300 font-body">Corriere: {result.carrier}</div>
            <div className="text-neutral-300 font-body">Tracking: {result.code}</div>
            <div className="text-neutral-300 font-body">Consegna stimata: {result.eta}</div>
          </div>
        )}
      </section>
    </main>
  );
}
