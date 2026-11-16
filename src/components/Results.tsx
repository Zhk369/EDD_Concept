import { MessageCircleHeart, Phone, RotateCcw, AlertTriangle } from 'lucide-react';
import type { Dict } from '@/i18n';
import type { Avatar } from '@/avatar';

export function Results({
  dict,
  answers,
  onChat,
  onRetake,
  avatar,
}: {
  dict: Dict;
  answers: number[];
  onChat: () => void;
  onRetake: () => void;
  avatar: Avatar | null;
}) {
  const score = answers.reduce((a, b) => a + b, 0);
  const levelIdx = score <= 1 ? 0 : score <= 4 ? 1 : 2;
  const level = dict.results.levels[levelIdx];

  const toneStyles = {
    ok: { bg: 'bg-sage-100', text: 'text-sage-700', ring: 'ring-sage-200' },
    mild: { bg: 'bg-sand-100', text: 'text-sand-600', ring: 'ring-sand-200' },
    moderate: { bg: 'bg-mist-100', text: 'text-mist-700', ring: 'ring-mist-200' },
  } as const;
  const tone = toneStyles[level.tone];

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10 animate-slide-up">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-sage-900 text-balance">
          {dict.results.heading}
        </h1>
        <p className="mt-4 text-sage-600 leading-relaxed max-w-xl mx-auto">{dict.results.intro}</p>
      </div>

      <div className={`mt-8 rounded-2xl ${tone.bg} p-6 ring-1 ${tone.ring}`}>
        <h2 className={`text-xl font-bold ${tone.text}`}>{level.title}</h2>
        <p className="mt-2 text-sage-700 leading-relaxed">{level.desc}</p>
      </div>

      {avatar && (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-sage-500">
          <span className={`flex h-8 w-8 items-center justify-center rounded-full text-lg ${avatar.color}`}>
            {avatar.emoji}
          </span>
          <span className="font-semibold">{avatar.name}</span>
        </div>
      )}

      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mist-500 to-sage-500 p-[1.5px] shadow-xl shadow-mist-500/20">
        <div className="rounded-3xl bg-white p-7 sm:p-9 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mist-400 to-sage-400 text-white animate-pulse-soft">
            <MessageCircleHeart className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-xl sm:text-2xl font-extrabold text-sage-900">{dict.results.nudgeTitle}</h2>
          <p className="mt-3 text-sage-600 max-w-md mx-auto leading-relaxed">{dict.results.nudgeText}</p>
          <button
            type="button"
            onClick={onChat}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-sage-500 to-mist-500 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-mist-500/25 transition hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] focus-visible:ring-mist-500"
          >
            <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
            {dict.results.nudgeBtn}
          </button>
        </div>
      </div>

      <section className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-sage-100 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="h-5 w-5 text-sand-500" aria-hidden="true" />
          <h2 className="text-lg font-bold text-sage-900">{dict.results.hotlinesTitle}</h2>
        </div>
        <p className="text-sm text-sage-500 mb-5">{dict.results.hotlinesSubtitle}</p>
        <ul className="space-y-3">
          {dict.results.hotlines.map((h) => (
            <li
              key={h.phone}
              className="flex items-center gap-4 rounded-xl border border-sage-100 bg-sage-50/60 p-4 transition hover:border-mist-200 hover:bg-mist-50"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-mist-100 text-mist-600">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sage-800 text-sm leading-snug">{h.name}</p>
                <p className="text-xs text-sage-500 mt-0.5">{h.desc}</p>
              </div>
              <a
                href={`tel:${h.phone.replace(/\s/g, '')}`}
                className="flex-shrink-0 rounded-lg bg-mist-500 px-4 py-2 text-lg font-extrabold text-white tabular-nums transition hover:bg-mist-600 focus-visible:ring-mist-500"
              >
                {h.phone}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {dict.results.retake}
        </button>
      </div>
    </main>
  );
}
