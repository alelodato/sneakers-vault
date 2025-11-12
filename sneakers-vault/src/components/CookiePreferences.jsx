import { useEffect, useState } from "react";
const LS_KEY = "sv_cookie_consent_v1";

export default function CookiePreferences({ modal = true, onClose }) {
  const [prefs, setPrefs] = useState({ necessary:true, analytics:false, marketing:false });
  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setPrefs(JSON.parse(saved));
  }, []);

  const save = () => { localStorage.setItem(LS_KEY, JSON.stringify(prefs)); onClose?.(); };

  const body = (
    <div className="w-full max-w-lg rounded-xl border border-white/10 bg-neutral-900/95 p-5 text-neutral-100">
      <h2 className="text-xl font-heading mb-2">Preferenze Cookie</h2>
      <p className="text-sm text-neutral-300 font-body mb-4">
        Attiva/disattiva le categorie non essenziali. I cookie necessari sono sempre attivi.
      </p>

      <div className="space-y-3">
        <label className="flex items-center justify-between bg-neutral-800/60 rounded-lg p-3">
          <div>
            <div className="font-heading">Necessari</div>
            <div className="text-xs text-neutral-300 font-body">Funzionamento del sito</div>
          </div>
          <input type="checkbox" checked readOnly className="accent-white cursor-not-allowed"/>
        </label>

        <label className="flex items-center justify-between bg-neutral-800/60 rounded-lg p-3">
          <div>
            <div className="font-heading">Analytics</div>
            <div className="text-xs text-neutral-300 font-body">Statistiche anonime</div>
          </div>
          <input type="checkbox" className="accent-white"
                 checked={prefs.analytics}
                 onChange={(e)=>setPrefs(p=>({ ...p, analytics:e.target.checked }))}/>
        </label>

        <label className="flex items-center justify-between bg-neutral-800/60 rounded-lg p-3">
          <div>
            <div className="font-heading">Marketing</div>
            <div className="text-xs text-neutral-300 font-body">Pixel/remarketing</div>
          </div>
          <input type="checkbox" className="accent-white"
                 checked={prefs.marketing}
                 onChange={(e)=>setPrefs(p=>({ ...p, marketing:e.target.checked }))}/>
        </label>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        {modal && (
          <button onClick={onClose} className="px-4 py-2 bg-neutral-800 rounded-md font-heading">Annulla</button>
        )}
        <button onClick={save} className="px-4 py-2 bg-white text-neutral-900 rounded-md font-heading">
          Salva
        </button>
      </div>
    </div>
  );

  if (!modal) return <div className="px-4 py-10 flex justify-center">{body}</div>;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur" onClick={onClose}>
      <div onClick={(e)=>e.stopPropagation()}>{body}</div>
    </div>
  );
}
