import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-white/10 bg-[#0b111b] text-slate-200">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Grid principale */}
                <div className="grid gap-10 md:grid-cols-12">
                    {/* Brand + social */}
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-accent tracking-wide">Sneakers Vault</h3>
                        <p className="mt-2 text-sm text-slate-400">
                            Unlock the Vault. Step into Style.
                        </p>

                        <div className="mt-4 flex gap-3">
                            {[
                                {
                                    label: "Instagram", href: "https://www.instagram.com", target: "_blank", icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.3a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0zM12 9.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6z" /></svg>
                                    )
                                },
                                {
                                    label: "TikTok", href: "https://www.tiktok.com", target: "_blank", icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M14.5 3a6 6 0 005 5v3.1a8.5 8.5 0 01-4.7-1.5l-.1 6.1a5 5 0 11-5.2-5 5.3 5.3 0 011.8.3V9.3A8.4 8.4 0 009.8 9a8 8 0 108.9 8l.1-9.8A6.8 6.8 0 0114.5 3z" /></svg>
                                    )
                                },
                                {
                                    label: "X", href: "https://x.com", target: "_blank", icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M4 4l7.2 9.7L4 20h3.1l5.2-5.2L16.8 20H20l-7.4-10L20 4h-3.2l-4.9 4.9L7.2 4H4z" /></svg>
                                    )
                                },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 transition hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop links */}
                    <nav className="md:col-span-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            Shop
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link to="/shop?tag=men" className="hover:text-cyan-300">
                                <button >{t('home.men')}</button>
                            </Link></li>
                            <li><Link to="/shop?tag=women" className="hover:text-cyan-300">
                                <button >{t('home.women')}</button>
                            </Link></li>
                            <li><Link to="/shop?tag=kids" className="hover:text-cyan-300">
                                <button >{t('home.kids')}</button>
                            </Link></li>
                        </ul>
                    </nav>

                    {/* Info/Legal */}
                    <div>
                        <h4 className="text-neutral-400 uppercase tracking-widest text-xs mb-3 font-heading">Info</h4>
                        <ul className="space-y-2 font-body">
                            <li><a href="/faq-resi" className="hover:underline">FAQ & Resi</a></li>
                            <li><a href="/traccia-ordine" className="hover:underline">Traccia Ordine</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
                            <li><a href="/cookie" className="hover:underline">Cookie</a></li>
                            <li><a href="/termini" className="hover:underline">Termini</a></li>
                            <li><a href="/cookie-preferences" className="hover:underline">Impostazioni Cookie</a></li>
                        </ul>
                    </div>


                    {/* Contatti + Lingua (=> tuo snippet convertito in Tailwind) */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {t("home.contact")}
                        </h4>
                        <p className="mt-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                            >
                                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                                {t("home.contact")}
                            </Link>
                        </p>

                        <div className="mt-6">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                {t("home.lang")}
                            </h4>
                            <div className="mt-3 inline-flex items-center gap-2">
                                <LanguageSwitcher />
                            </div>
                        </div>

                        {/* Newsletter (opzionale) */}
                        <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                inputMode="email"
                                placeholder="Email"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            />
                            <button
                                type="submit"
                                className="rounded-xl bg-gradient-to-b from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                            >
                                Iscriviti
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
                    <div className="flex flex-wrap items-center gap-2">
                        {["VISA", "MC", "Stripe", "SSL"].map(b => (
                            <span key={b} className="rounded-lg border border-white/10 px-2 py-1 text-[11px] tracking-wide">
                                {b}
                            </span>
                        ))}
                    </div>
                    <p className="text-center sm:text-right">
                        © {new Date().getFullYear()}Sneakers Vault — All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
