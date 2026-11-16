import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { LANGS, type Lang, type Dict } from '@/i18n';

export function Header({
  lang,
  setLang,
  dict,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  dict: Dict;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-sage-50/90 backdrop-blur-md border-b border-sage-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sage-400 to-mist-400 text-white shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="font-display font-extrabold text-sage-800 text-lg tracking-tight">
              {dict.header.brand}
            </p>
            <p className="text-xs text-sage-600 hidden sm:block">{dict.header.brandTagline}</p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label={dict.header.langLabel}
            className="flex items-center gap-2 rounded-xl border border-sage-200 bg-white px-3 py-2 text-sm font-semibold text-sage-700 transition hover:bg-sage-50 hover:border-sage-300 focus-visible:ring-mist-500"
          >
            <Globe className="h-4 w-4 text-mist-500" aria-hidden="true" />
            <span>{lang}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {open && (
            <ul
              role="listbox"
              aria-label={dict.header.langLabel}
              className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border border-sage-200 bg-white shadow-lg shadow-sage-900/5 animate-fade-in"
            >
              {LANGS.map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={lang === l}
                    onClick={() => {
                      setLang(l);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2.5 text-sm transition ${
                      lang === l
                        ? 'bg-mist-50 font-bold text-mist-700'
                        : 'text-sage-700 hover:bg-sage-50'
                    }`}
                  >
                    <span>
                      {l === 'RU' ? 'Русский' : l === 'KZ' ? 'Қазақша' : 'English'}
                    </span>
                    {lang === l && <span className="text-mist-500" aria-hidden="true">●</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
