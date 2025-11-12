import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LS_KEY = "sv_cookie_consent_v1";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!localStorage.getItem(LS_KEY)) setOpen(true); }, []);
  if (!open) return null;

  const save = (v) => { localStorage.setItem(LS_KEY, JSON.stringify(v)); setOpen(false); };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-3 rounded-xl border border-white/10 bg-neutral-900/90 backdrop-blur px-4 py-3">
        <p className="text-sm text-neutral-200 font-body">
          Usiamo cookie per migliorare l’esperienza. Leggi la{" "}
          <Link to="/cookie" className="underline">Cookie Policy</Link>.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => save({ necessary:true, analytics:false, marketing:false })}
                  className="px-4 py-2 rounded-md bg-neutral-800 text-neutral-100 font-heading">
            Solo necessari
          </button>
          <Link to="/cookie-preferences"
                className="px-4 py-2 rounded-md bg-neutral-800 text-neutral-100 font-heading">
            Preferenze
          </Link>
          <button onClick={() => save({ necessary:true, analytics:true, marketing:false })}
                  className="ml-auto px-4 py-2 rounded-md bg-white text-neutral-900 font-heading">
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
}
