export type Lang = 'RU' | 'KZ' | 'EN';

export const LANGS: Lang[] = ['RU', 'KZ', 'EN'];

export type Screen = 'onboarding' | 'quiz' | 'results' | 'chat';

export type Dict = {
  nav: {
    start: string;
    about: string;
    crisis: string;
  };
  header: {
    brand: string;
    brandTagline: string;
    langLabel: string;
  };
  onboarding: {
    privacyBadge: string;
    heading: string;
    subheading: string;
    promises: { icon: string; title: string; text: string }[];
    consent: string;
    startBtn: string;
    learnMore: string;
  };
  quiz: {
    progress: (current: number, total: number) => string;
    question: string;
    next: string;
    back: string;
    finish: string;
    noPressure: string;
    questions: { text: string; options: string[] }[];
  };
  results: {
    heading: string;
    intro: string;
    levels: { title: string; desc: string; tone: 'ok' | 'mild' | 'moderate' }[];
    nudgeTitle: string;
    nudgeText: string;
    nudgeBtn: string;
    hotlinesTitle: string;
    hotlinesSubtitle: string;
    hotlines: { name: string; phone: string; desc: string }[];
    retake: string;
  };
  chat: {
    title: string;
    status: string;
    youLabel: string;
    psychLabel: string;
    psychBio: string;
    placeholder: string;
    send: string;
    endBtn: string;
    welcomeMsg: string;
    endModalTitle: string;
    endModalText: string;
    endModalConfirm: string;
    endModalCancel: string;
    endedTitle: string;
    endedText: string;
    goHome: string;
    disclaimer: string;
  };
  panic: {
    hide: string;
    loading: string;
  };
  footer: {
    text: string;
  };
};

export const DICT: Record<Lang, Dict> = {
  RU: {
    nav: { start: 'Начать', about: 'О сервисе', crisis: 'Экстренная помощь' },
    header: {
      brand: 'SafeMind',
      brandTagline: 'Анонимно. Безопасно. Без оценок.',
      langLabel: 'Язык',
    },
    onboarding: {
      privacyBadge: 'Без сбора данных',
      heading: 'Безопасное место, чтобы поделиться тем, что на душе.',
      subheading:
        'Здесь ты можешь быть собой. Никаких имён, email или телефонов. Мы не используем файлы cookie и не отслеживаем твоё местоположение. Всё, что ты напишешь, исчезнет, как только ты закроешь вкладку.',
      promises: [
        {
          icon: 'shield',
          title: 'Полная анонимность',
          text: 'Ты получаешь случайный аватар — например, «Анонимный Лис». Никто не узнает, кто ты.',
        },
        {
          icon: 'lock',
          title: 'Никаких данных',
          text: 'Мы не храним имена, почту или телефон. Профиль удаляется при закрытии вкладки.',
        },
        {
          icon: 'heart',
          title: 'Без давления и оценок',
          text: 'Нет таймеров, нет «тёмных» приёмов. Ты проходишь тест в своём темпе.',
        },
      ],
      consent:
        'Нажимая кнопку ниже, я понимаю, что это не замена медицинской помощи, а место, где можно выговориться.',
      startBtn: 'Пройти тест анонимно',
      learnMore: 'Как мы защищаем твою приватность',
    },
    quiz: {
      progress: (c, t) => `Вопрос ${c} из ${t}`,
      question: 'Вопрос',
      next: 'Далее',
      back: 'Назад',
      finish: 'Завершить тест',
      noPressure: 'Не торопись. Времени достаточно.',
      questions: [
        {
          text: 'Как часто за последнюю неделю ты чувствовал(а) грусть или подавленность?',
          options: ['Почти не было', 'Иногда', 'Часто в течение дня', 'Почти всё время'],
        },
        {
          text: 'Как ты оцениваешь свой сон в последние две недели?',
          options: ['Сплю хорошо', 'Сон немного нарушен', 'Трудно засыпаю', 'Почти не сплю'],
        },
        {
          text: 'Чувствуешь ли ты, что есть кто-то, с кем можно поделиться своими переживаниями?',
          options: ['Да, есть близкий человек', 'Есть, но редко говорим', 'Хочется, но не с кем', 'Предпочитаю один(на)'],
        },
      ],
    },
    results: {
      heading: 'Спасибо, что поделился(ась)',
      intro:
        'Это не диагноз и не медицинское заключение — лишь мягкая обратная связь. Ты молодец, что обратил(а) внимание на себя.',
      levels: [
        {
          title: 'Похоже, у тебя всё неплохо',
          desc: 'Это здорово. Если захочешь поговорить — мы рядом.',
          tone: 'ok',
        },
        {
          title: 'Небольшие переживания',
          desc: 'Бывает, что тревожно или грустно. Поговорить с кем-то — хороший шаг.',
          tone: 'mild',
        },
        {
          title: 'Похоже, тебе сейчас непросто',
          desc: 'Твои чувства важны. Пожалуйста, не оставайся один на один — напиши психологу.',
          tone: 'moderate',
        },
      ],
      nudgeTitle: 'Хочется выговориться?',
      nudgeText:
        'Ты можешь анонимно написать дежурному психологу. Без имени, без записи — просто разговор.',
      nudgeBtn: 'Написать психологу анонимно',
      hotlinesTitle: 'Телефоны экстренной помощи',
      hotlinesSubtitle: 'Бесплатно. Анонимно. Круглосуточно. Казахстан.',
      hotlines: [
        {
          name: 'Республиканская линия доверия для детей и молодёжи',
          phone: '150',
          desc: 'Поддержка 24/7 для подростков и молодёжи',
        },
        {
          name: 'Единый номер вызова экстренных служб',
          phone: '112',
          desc: 'Срочная помощь в кризисной ситуации',
        },
        {
          name: 'Линия психологической помощи',
          phone: '8 800 080 10 10',
          desc: 'Бесплатные консультации психолога',
        },
      ],
      retake: 'Пройти тест заново',
    },
    chat: {
      title: 'Анонимный чат',
      status: 'Психолог на связи',
      youLabel: 'Вы',
      psychLabel: 'Дежурный психолог',
      psychBio: 'Отвечает с поддержкой и без оценок',
      placeholder: 'Напишите сообщение…',
      send: 'Отправить',
      endBtn: 'Завершить и удалить переписку',
      welcomeMsg:
        'Здравствуйте. Я здесь, чтобы выслушать вас. Можете рассказать, что вас беспокоит — в своём темпе и своими словами.',
      endModalTitle: 'Удалить переписку?',
      endModalText:
        'Вся история сообщений будет удалена без возможности восстановления. Это действие нельзя отменить.',
      endModalConfirm: 'Да, завершить и удалить',
      endModalCancel: 'Остаться в чате',
      endedTitle: 'Переписка удалена',
      endedText: 'История чата стёрта. Спасибо, что доверились. Берегите себя.',
      goHome: 'Вернуться на главную',
      disclaimer:
        'Чат не является медицинской услугой. В экстренной ситуации звоните на линию доверия 150.',
    },
    panic: {
      hide: 'Скрыть экран',
      loading: 'Загрузка…',
    },
    footer: {
      text: 'SafeMind — анонимная психологическая поддержка. Без сбора данных. Без cookie. Профиль удаляется при закрытии вкладки.',
    },
  },
  KZ: {
    nav: { start: 'Бастау', about: 'Қызмет туралы', crisis: 'Шұғыл көмек' },
    header: {
      brand: 'SafeMind',
      brandTagline: 'Анонимді. Қауіпсіз. Бағаламай.',
      langLabel: 'Тіл',
    },
    onboarding: {
      privacyBadge: 'Деректер жиналмайды',
      heading: 'Көңіліңдегіні бөлісуге қауіпсіз орын.',
      subheading:
        'Мұда өзің бола аласың. Есім, email немесе телефон жоқ. Біз cookie файлдарын қолданбаймыз және орналасуыңды қадағаламаймыз. Жазғаныңның бәрі бетті жапқанда жоғалады.',
      promises: [
        {
          icon: 'shield',
          title: 'Толық анонимдік',
          text: 'Сен кездейсоқ аватар аласың — мысалы, «Анонимді Түлкі». Ешкім кім екеніңді білмейді.',
        },
        {
          icon: 'lock',
          title: 'Деректер жоқ',
          text: 'Біз есім, пошта немесе телефон сақтамаймыз. Профиль бет жабылғанда жойылады.',
        },
        {
          icon: 'heart',
          title: 'Қысым мен бағалаусыз',
          text: 'Таймер жоқ, «қараңғы» әдістер жоқ. Тесті өз қарқыныңмен өтесің.',
        },
      ],
      consent:
        'Төмендегі батырманы басу арқылы бұл медициналық көмектің орнын баспайтынын, тек сыртқа шығуға болатын орын екенін түсінемін.',
      startBtn: 'Тесті анонимді өту',
      learnMore: 'Біз сенің жекелігіңді қалай қорғаймыз',
    },
    quiz: {
      progress: (c, t) => `Сұрақ ${c}, барлығы ${t}`,
      question: 'Сұрақ',
      next: 'Келесі',
      back: 'Артқа',
      finish: 'Тесті аяқтау',
      noPressure: 'Асықпа. Уақыт жеткілікті.',
      questions: [
        {
          text: 'Соңғы аптада қанша жиі мұңай немесе көңілсіз болдың?',
          options: ['Іс жүзінде болған жоқ', 'Кейде', 'Күні бойы жиі', 'Іс жүзінде үнемі'],
        },
        {
          text: 'Соңғы екі аптада ұйықтауыңды қалай бағалайсың?',
          options: ['Жақсы ұйықтаймын', 'Ұйықтауың сәл бұзылған', 'Ұйқыға кіру қиын', 'Іс жүзінде ұйықтамаймын'],
        },
        {
          text: 'Көңіліңдегіні бөлісетін адам бар деп сезінесің бе?',
          options: ['Иә, жақын адам бар', 'Бар, бірақ сирек сөйлесеміз', 'Қалаймын, бірақ ешкім жоқ', 'Жалғыз болуды жөн көремін'],
        },
      ],
    },
    results: {
      heading: 'Бөліскеніңе рахмет',
      intro:
        'Бұл диагноздың медициналық қорытындысы емес — жұмсақ кері байланыс қана. Өзіңе назар аударғаның үшін алғыс.',
      levels: [
        {
          title: 'Сенің жағдайың жаман емес сияқты',
          desc: 'Керемет. Сөйлесгің келсе — біз осындаумыз.',
          tone: 'ok',
        },
        {
          title: 'Шағын мазасыздық',
          desc: 'Мазасызданып немесе мұңайып тұрған кездер болады. Біреумен сөйлесу — жақсы қадам.',
          tone: 'mild',
        },
        {
          title: 'Қазір саған қиын сияқты',
          desc: 'Сенің сезімдерң маңызды. Дұғайын болма — психологқа жаз.',
          tone: 'moderate',
        },
      ],
      nudgeTitle: 'Сыртыңа шыққың келе ме?',
      nudgeText:
        'Анонимді түрде дежурлы психологқа жаза аласың. Есімсіз, жазбасыз — тек әңгіме.',
      nudgeBtn: 'Психологқа анонимді жазу',
      hotlinesTitle: 'Шұғыл көмек telefonдары',
      hotlinesSubtitle: 'Тегін. Анонимді. Тәулік бойы. Қазақстан.',
      hotlines: [
        {
          name: 'Балалар мен жастарға арналған республикалық сенім желісі',
          phone: '150',
          desc: 'Жасөспірімдер мен жастарға 24/7 қолдау',
        },
        {
          name: 'Төтенше жағдайларды шақырудың бірыңғай нөмірі',
          phone: '112',
          desc: 'Дағдарыс жағдайында шұғыл көмек',
        },
        {
          name: 'Психологиялық көмек желісі',
          phone: '8 800 080 10 10',
          desc: 'Психологтың тегін кеңестері',
        },
      ],
      retake: 'Тесті қайта өту',
    },
    chat: {
      title: 'Анонимді чат',
      status: 'Психолог байланыста',
      youLabel: 'Сіз',
      psychLabel: 'Дежурлы психолог',
      psychBio: 'Қолдаумен және бағаламай жауап береді',
      placeholder: 'Хабарлама жазыңыз…',
      send: 'Жіберу',
      endBtn: 'Аяқтау және хат алмасуды жою',
      welcomeMsg:
        'Сәлем. Мен сізді тыңдауға осындамын. Нені мазалайтынын өз қарқыныңызбен, өз сөзіңізбен айта аласыз.',
      endModalTitle: 'Хат алмасуды жою керек пе?',
      endModalText:
        'Барлық хабарлама тарихы қалпына келтірілмейтін жойылады. Бұл әрекетті қайтару мүмкін емес.',
      endModalConfirm: 'Иә, аяқтау және жою',
      endModalCancel: 'Чатта қалу',
      endedTitle: 'Хат алмасу жойылды',
      endedText: 'Чат тарихы өшірілді. Сенім артқаныңа рахмет. Өзіңді сақта.',
      goHome: 'Басты бетке оралу',
      disclaimer:
        'Чат медициналық қызмет емес. Шұғыл жағдайда 150 сенім желісіне қоңырау шалыңыз.',
    },
    panic: {
      hide: 'Экранды жасыру',
      loading: 'Жүктеу…',
    },
    footer: {
      text: 'SafeMind — анонимді психологиялық қолдау. Деректер жиналмайды. Cookie жоқ. Профиль бет жабылғанда жойылады.',
    },
  },
  EN: {
    nav: { start: 'Begin', about: 'About', crisis: 'Crisis help' },
    header: {
      brand: 'SafeMind',
      brandTagline: 'Anonymous. Safe. Non-judgmental.',
      langLabel: 'Language',
    },
    onboarding: {
      privacyBadge: 'No data collected',
      heading: 'A safe place to share what is on your mind.',
      subheading:
        'Here you can be yourself. No names, email, or phone. We do not use cookies or track your location. Everything you write disappears when you close the tab.',
      promises: [
        {
          icon: 'shield',
          title: 'Full anonymity',
          text: 'You get a random avatar — for example, "Anonymous Fox". No one knows who you are.',
        },
        {
          icon: 'lock',
          title: 'No data',
          text: 'We do not store names, email, or phone. Your profile is deleted when you close the tab.',
        },
        {
          icon: 'heart',
          title: 'No pressure or judgment',
          text: 'No timers, no dark patterns. You take the test at your own pace.',
        },
      ],
      consent:
        'By clicking the button below, I understand this is not a substitute for medical care, but a place to talk.',
      startBtn: 'Take the test anonymously',
      learnMore: 'How we protect your privacy',
    },
    quiz: {
      progress: (c, t) => `Question ${c} of ${t}`,
      question: 'Question',
      next: 'Next',
      back: 'Back',
      finish: 'Finish the test',
      noPressure: 'No rush. There is plenty of time.',
      questions: [
        {
          text: 'How often in the last week have you felt sad or down?',
          options: ['Almost never', 'Sometimes', 'Often during the day', 'Almost all the time'],
        },
        {
          text: 'How would you rate your sleep over the last two weeks?',
          options: ['I sleep well', 'Sleep is a bit disrupted', 'Hard to fall asleep', 'I barely sleep'],
        },
        {
          text: 'Do you feel there is someone you can share your feelings with?',
          options: ['Yes, a close person', 'Yes, but we rarely talk', 'I wish, but no one', 'I prefer to be alone'],
        },
      ],
    },
    results: {
      heading: 'Thank you for sharing',
      intro:
        'This is not a diagnosis or a medical conclusion — just gentle feedback. Well done for paying attention to yourself.',
      levels: [
        {
          title: 'Things seem okay for you',
          desc: 'That is great. If you want to talk — we are here.',
          tone: 'ok',
        },
        {
          title: 'Some worries',
          desc: 'It happens to feel anxious or sad. Talking to someone is a good step.',
          tone: 'mild',
        },
        {
          title: 'It seems hard for you right now',
          desc: 'Your feelings matter. Please do not stay alone — write to a psychologist.',
          tone: 'moderate',
        },
      ],
      nudgeTitle: 'Want to talk it out?',
      nudgeText:
        'You can write to a duty psychologist anonymously. No name, no record — just a conversation.',
      nudgeBtn: 'Write to a psychologist anonymously',
      hotlinesTitle: 'Emergency helplines',
      hotlinesSubtitle: 'Free. Anonymous. 24/7. Kazakhstan.',
      hotlines: [
        {
          name: 'National helpline for children and youth',
          phone: '150',
          desc: '24/7 support for teens and youth',
        },
        {
          name: 'Unified emergency number',
          phone: '112',
          desc: 'Urgent help in a crisis',
        },
        {
          name: 'Psychological support line',
          phone: '8 800 080 10 10',
          desc: 'Free consultations with a psychologist',
        },
      ],
      retake: 'Retake the test',
    },
    chat: {
      title: 'Anonymous chat',
      status: 'Psychologist online',
      youLabel: 'You',
      psychLabel: 'Duty psychologist',
      psychBio: 'Responds with support and without judgment',
      placeholder: 'Type a message…',
      send: 'Send',
      endBtn: 'End and delete the conversation',
      welcomeMsg:
        'Hello. I am here to listen to you. You can tell me what is bothering you — at your own pace and in your own words.',
      endModalTitle: 'Delete the conversation?',
      endModalText:
        'All message history will be permanently deleted. This action cannot be undone.',
      endModalConfirm: 'Yes, end and delete',
      endModalCancel: 'Stay in the chat',
      endedTitle: 'Conversation deleted',
      endedText: 'Chat history has been erased. Thank you for trusting us. Take care.',
      goHome: 'Back to home',
      disclaimer:
        'The chat is not a medical service. In an emergency, call the helpline 150.',
    },
    panic: {
      hide: 'Hide screen',
      loading: 'Loading…',
    },
    footer: {
      text: 'SafeMind — anonymous psychological support. No data collected. No cookies. Your profile is deleted when you close the tab.',
    },
  },
};
