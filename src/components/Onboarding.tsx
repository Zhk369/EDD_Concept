import { Shield, Lock, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/i18n';
import type { Avatar } from '@/avatar';

const ICONS = { shield: Shield, lock: Lock, heart: Heart } as const;

export function Onboarding({
  dict,
  onStart,
  avatar,
}: {
  dict: Dict;
  onStart: () => void;
  avatar: Avatar | null;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16 animate-slide-up">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-1.5 text-sm font-semibold text-sage-700">
          <Shield className="h-4 w-4" aria-hidden="true" />
          {dict.onboarding.privacyBadge}
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-sage-900 leading-tight text-balance">
          {dict.onboarding.heading}
        </h1>
        <p className="mt-5 text-lg text-sage-700 leading-relaxed max-w-2xl mx-auto">
          {dict.onboarding.subheading}
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {dict.onboarding.promises.map((p) => {
          const Icon = ICONS[p.icon as keyof typeof ICONS] ?? Shield;
          return (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-6 ring-1 ring-sage-100 shadow-sm transition hover:shadow-md hover:ring-sage-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-mist-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-sage-800">{p.title}</h3>
              <p className="mt-2 text-sm text-sage-600 leading-relaxed">{p.text}</p>
            </div>
          );
        })}
      </div>

      {avatar && (
        <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-mist-50 px-5 py-4 ring-1 ring-mist-100">
          <span className={`flex h-10 w-10 items-center justify-center rounded-full text-xl ${avatar.color}`}>
            {avatar.emoji}
          </span>
          <p className="text-sm text-mist-700">
            <span className="font-bold">{avatar.name}</span>
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center gap-4">
        <label className="flex items-start gap-3 text-sm text-sage-600 max-w-xl text-center justify-center cursor-pointer">
          <input type="checkbox" defaultChecked className="mt-0.5 h-5 w-5 accent-mist-500" />
          <span className="leading-relaxed">{dict.onboarding.consent}</span>
        </label>
        <button
          type="button"
          onClick={onStart}
          className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-sage-500 to-mist-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-mist-500/20 transition hover:shadow-xl hover:shadow-mist-500/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-mist-500"
        >
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          {dict.onboarding.startBtn}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}
