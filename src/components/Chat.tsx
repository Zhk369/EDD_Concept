import { useState, useRef, useEffect } from 'react';
import { Send, Trash2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { Dict } from '@/i18n';
import type { Avatar } from '@/avatar';

type Msg = { id: number; from: 'me' | 'psych'; text: string; time: string };

export function Chat({
  dict,
  avatar,
  onHome,
}: {
  dict: Dict;
  avatar: Avatar;
  onHome: () => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 0, from: 'psych', text: dict.chat.welcomeMsg, time: now() },
  ]);
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ended, setEnded] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text || ended) return;
    const id = Date.now();
    setMessages((m) => [...m, { id, from: 'me', text, time: now() }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: id + 1,
          from: 'psych',
          text: reply(text, dict.chat.welcomeMsg),
          time: now(),
        },
      ]);
    }, 1200);
  };

  const confirmEnd = () => {
    setEnded(true);
    setShowModal(false);
    setMessages([]);
  };

  if (ended) {
    return (
      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-16 text-center animate-slide-up">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
          <ShieldCheck className="h-8 w-8" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-2xl font-extrabold text-sage-900">{dict.chat.endedTitle}</h1>
        <p className="mt-3 text-sage-600 leading-relaxed">{dict.chat.endedText}</p>
        <button
          type="button"
          onClick={onHome}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sage-100 px-6 py-3 font-semibold text-sage-700 transition hover:bg-sage-200 focus-visible:ring-mist-500"
        >
          {dict.chat.goHome}
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-6 animate-slide-up flex flex-col" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="rounded-2xl bg-white ring-1 ring-sage-100 shadow-sm flex flex-col flex-1 overflow-hidden">
        <div className="border-b border-sage-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-mist-300 to-sage-300 text-white font-bold text-sm">
              ПС
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-sage-400 ring-2 ring-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sage-900">{dict.chat.psychLabel}</p>
              <p className="text-xs text-sage-500 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                {dict.chat.status}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs sm:text-sm font-semibold text-red-600 transition hover:bg-red-100 focus-visible:ring-red-400"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{dict.chat.endBtn}</span>
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-sage-50 px-3 py-2">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-base ${avatar.color}`}>
              {avatar.emoji}
            </span>
            <span className="text-xs text-sage-600">
              <span className="font-semibold">{avatar.name}</span> — {dict.chat.youLabel}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 bg-sage-50/30">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                  m.from === 'me'
                    ? 'bg-mist-500 text-white rounded-br-md'
                    : 'bg-white text-sage-800 ring-1 ring-sage-100 rounded-bl-md'
                }`}
              >
                <p>{m.text}</p>
                <p className={`mt-1 text-[10px] ${m.from === 'me' ? 'text-mist-100' : 'text-sage-400'}`}>
                  {m.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="border-t border-sage-100 p-3">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder={dict.chat.placeholder}
              rows={1}
              className="flex-1 resize-none rounded-xl border border-sage-200 bg-sage-50/50 px-4 py-3 text-[15px] text-sage-800 placeholder:text-sage-400 transition focus:border-mist-300 focus:bg-white focus-visible:ring-mist-500"
              aria-label={dict.chat.placeholder}
            />
            <button
              type="button"
              onClick={send}
              disabled={!input.trim()}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-mist-500 text-white transition hover:bg-mist-600 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:ring-mist-500"
              aria-label={dict.chat.send}
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-sage-400">{dict.chat.disclaimer}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-sage-900/40 backdrop-blur-sm px-4 animate-fade-in">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="end-modal-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-slide-up"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 id="end-modal-title" className="text-lg font-bold text-sage-900">
                {dict.chat.endModalTitle}
              </h2>
            </div>
            <p className="mt-4 text-sage-600 leading-relaxed">{dict.chat.endModalText}</p>
            <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-sage-200 px-5 py-2.5 font-semibold text-sage-700 transition hover:bg-sage-50 focus-visible:ring-mist-500"
              >
                {dict.chat.endModalCancel}
              </button>
              <button
                type="button"
                onClick={confirmEnd}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600 focus-visible:ring-red-400"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                {dict.chat.endModalConfirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function now() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function reply(text: string, _welcome: string): string {
  const t = text.toLowerCase();
  if (t.includes('трудн') || t.includes('тяжел') || t.includes('плох') || t.includes('қиын') || t.includes('hard') || t.includes('bad'))
    return 'Спасибо, что доверились. То, что ты сейчас проживаешь — непросто, и это нормально чувствовать. Расскажи, что случилось недавно — что-то конкретное или просто стало тяжело в целом?';
  if (t.includes('устал') || t.includes('сон') || t.includes('sleep') || t.includes('ұйық'))
    return 'Слышу тебя. Когда тело не отдыхает, эмоции становятся тяжелее. Как давно ты так себя чувствуешь — это последние дни или продолжается уже долго?';
  if (t.includes('один') || t.includes('одинок') || t.includes('alone') || t.includes('жалғыз'))
    return 'Быть одному с тяжёлыми чувствами — это очень много. Ты не должен проходить через это в одиночку. Что бы тебе сейчас помогло — просто выговориться или услышать, что с тобой всё в порядке?';
  return 'Спасибо, что написал(а). Я здесь и слушаю. Можешь рассказать подробнее — что именно сейчас беспокоит больше всего?';
}
