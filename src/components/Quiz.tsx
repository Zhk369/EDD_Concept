import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import type { Dict } from '@/i18n';

export function Quiz({
  dict,
  answers,
  setAnswers,
  onFinish,
  onBack,
}: {
  dict: Dict;
  answers: number[];
  setAnswers: (a: number[]) => void;
  onFinish: () => void;
  onBack: () => void;
}) {
  const current = answers.length;
  const total = dict.quiz.questions.length;
  const q = dict.quiz.questions[current];
  const progress = Math.round((current / total) * 100);

  const select = (idx: number) => {
    const next = [...answers, idx];
    setAnswers(next);
    if (next.length === total) {
      onFinish();
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-12 animate-slide-up">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-mist-600">
            {dict.quiz.progress(Math.min(current + 1, total), total)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-sage-500">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {dict.quiz.noPressure}
          </span>
        </div>
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-sage-100"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-sage-400 to-mist-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-sage-100 shadow-sm animate-fade-in" key={current}>
        <h2 className="text-xl sm:text-2xl font-bold text-sage-900 leading-snug text-balance">
          {q.text}
        </h2>

        <div className="mt-6 space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => select(idx)}
              className="flex w-full items-center gap-4 rounded-xl border border-sage-200 bg-sage-50/50 px-5 py-4 text-left text-sage-800 transition hover:border-mist-300 hover:bg-mist-50 hover:shadow-sm focus-visible:border-mist-400 focus-visible:ring-mist-500"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-sage-300 text-sm font-bold text-sage-500 transition group-hover:border-mist-400">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="font-medium">{opt}</span>
            </button>
          ))}
        </div>
      </div>

      {current > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {dict.quiz.back}
        </button>
      )}
    </main>
  );
}
