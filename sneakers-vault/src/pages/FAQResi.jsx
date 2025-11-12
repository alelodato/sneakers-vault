import { useState } from "react";

const QA = [
  { q: "Posso restituire un prodotto?", a: "Sì, entro 14 giorni dalla consegna, prodotto non usato e nella confezione originale." },
  { q: "Tempi di rimborso", a: "Il rimborso viene emesso entro 5–7 giorni lavorativi dalla verifica del reso." },
  { q: "Spedizioni", a: "Consegna 2–5 giorni lavorativi. Tracking disponibile via email." },
  { q: "Taglie e disponibilità", a: "Le quantità sono limitate; consigliamo di aggiungere ai preferiti per aggiornamenti." },
];

export default function FAQResi() {
  const [open, setOpen] = useState(0);

  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading text-white">FAQ & Resi</h1>
        <p className="mt-3 text-neutral-300 font-body">
          Domande frequenti su ordini, spedizioni, resi e rimborsi.
        </p>

        <div className="mt-8 space-y-3">
          {QA.map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-neutral-900/70">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-4 py-3 md:px-5 md:py-4 text-white font-heading"
              >
                {item.q}
              </button>
              {open === i && (
                <div className="px-4 pb-4 md:px-5 text-neutral-300 font-body">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-neutral-900/70 p-5">
          <h2 className="text-xl font-heading text-white">Politica Resi (sintesi)</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-300 font-body space-y-1">
            <li>Reso entro 14 giorni; costi spedizione a carico del cliente salvo difetti.</li>
            <li>Rimborsi sul metodo di pagamento originario.</li>
            <li>Articoli indossati/danneggiati non rimborsabili.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
