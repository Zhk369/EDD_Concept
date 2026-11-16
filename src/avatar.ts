const ANIMALS_RU = [
  'Лис', 'Заяц', 'Олень', 'Ёжик', 'Сова', 'Барсук', 'Выдра', 'Белка', 'Медведь', 'Кит',
];
const ANIMALS_KZ = [
  'Түлкі', 'Қоян', 'Бұғы', 'Кірпі', 'Жапалақ', 'Бұрсық', 'Кұндыз', 'Тиін', 'Аю', 'Кит',
];
const ANIMALS_EN = [
  'Fox', 'Hare', 'Deer', 'Hedgehog', 'Owl', 'Badger', 'Otter', 'Squirrel', 'Bear', 'Whale',
];

const COLORS = [
  'bg-sage-300 text-sage-800',
  'bg-mist-300 text-mist-800',
  'bg-sand-300 text-sand-600',
  'bg-sage-200 text-sage-700',
  'bg-mist-200 text-mist-700',
  'bg-sand-200 text-sand-600',
];

import type { Lang } from './i18n';

export type Avatar = {
  name: string;
  color: string;
  emoji: string;
};

const EMOJIS = ['🦊', '🐰', '🦌', '🦔', '🦉', '🦡', '🦦', '🐿️', '🐻', '🐋'];

export function generateAvatar(lang: Lang): Avatar {
  const idx = Math.floor(Math.random() * ANIMALS_RU.length);
  const animals =
    lang === 'KZ' ? ANIMALS_KZ : lang === 'EN' ? ANIMALS_EN : ANIMALS_RU;
  const prefix =
    lang === 'KZ' ? 'Анонимді' : lang === 'EN' ? 'Anonymous' : 'Анонимный';
  return {
    name: `${prefix} ${animals[idx]}`,
    color: COLORS[idx % COLORS.length],
    emoji: EMOJIS[idx],
  };
}
