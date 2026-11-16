import { useState, useEffect } from 'react';
import { DICT, type Lang, type Screen } from '@/i18n';
import { generateAvatar, type Avatar } from '@/avatar';
import { Header } from '@/components/Header';
import { Onboarding } from '@/components/Onboarding';
import { Quiz } from '@/components/Quiz';
import { Results } from '@/components/Results';
import { Chat } from '@/components/Chat';
import { PanicButton, PanicScreen } from '@/components/PanicButton';

export default function App() {
  const [lang, setLang] = useState<Lang>('RU');
  const [screen, setScreen] = useState<Screen>('onboarding');
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [panic, setPanic] = useState(false);

  const dict = DICT[lang];

  useEffect(() => {
    if (panic) {
      const t = setTimeout(() => {
        window.location.href = 'https://www.google.com';
      }, 600);
      return () => clearTimeout(t);
    }
  }, [panic]);

  const startQuiz = () => {
    if (!avatar) setAvatar(generateAvatar(lang));
    setAnswers([]);
    setScreen('quiz');
  };

  const finishQuiz = () => setScreen('results');

  const goChat = () => {
    if (!avatar) setAvatar(generateAvatar(lang));
    setScreen('chat');
  };

  const goHome = () => {
    setScreen('onboarding');
    setAnswers([]);
  };

  if (panic) {
    return <PanicScreen text={dict.panic.loading} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-sage-50">
      <Header lang={lang} setLang={setLang} dict={dict} />

      <div className="flex-1">
        {screen === 'onboarding' && (
          <Onboarding dict={dict} onStart={startQuiz} avatar={avatar} />
        )}
        {screen === 'quiz' && (
          <Quiz
            dict={dict}
            answers={answers}
            setAnswers={setAnswers}
            onFinish={finishQuiz}
            onBack={() => {
              setAnswers(answers.slice(0, -1));
              if (answers.length <= 1) setScreen('onboarding');
            }}
          />
        )}
        {screen === 'results' && (
          <Results
            dict={dict}
            answers={answers}
            onChat={goChat}
            onRetake={startQuiz}
            avatar={avatar}
          />
        )}
        {screen === 'chat' && avatar && (
          <Chat dict={dict} avatar={avatar} onHome={goHome} />
        )}
      </div>

      <footer className="border-t border-sage-100 bg-sage-50 py-5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="text-xs text-sage-400 leading-relaxed">{dict.footer.text}</p>
        </div>
      </footer>

      <PanicButton dict={dict} onPanic={() => setPanic(true)} visible={true} />
    </div>
  );
}
