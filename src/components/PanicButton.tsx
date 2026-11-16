import { EyeOff } from 'lucide-react';
import type { Dict } from '@/i18n';

export function PanicButton({
  dict,
  onPanic,
  visible,
}: {
  dict: Dict;
  onPanic: () => void;
  visible: boolean;
}) {
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={onPanic}
      aria-label={dict.panic.hide}
      title={dict.panic.hide}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-mist-600 shadow-lg shadow-sage-900/15 ring-1 ring-sage-200 transition hover:scale-105 hover:bg-mist-50 hover:text-mist-700 active:scale-95 focus-visible:ring-mist-500"
    >
      <EyeOff className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export function PanicScreen({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-mist-200 border-t-mist-500 animate-spin" />
        <p className="font-display text-lg text-sage-300">{text}</p>
      </div>
    </div>
  );
}
