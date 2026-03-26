// ===========================
// Translations
// ===========================
const translations = {
    ru: {
        // Nav
        'nav.contact': 'Связаться',

        // Top bar
        'top.max': 'Канал в Max',
        'top.vk': 'ВКонтакте',
        'top.tg_channel': 'ТГ канал',

        // Theme panel
        'theme.theme': 'Тема',
        'theme.light': '☀️ День',
        'theme.dark': '🌙 Ночь',
        'theme.font': 'Шрифт заголовков',

        // Hero
        'hero.label': 'Бизнес-наставник',
        'hero.title': 'Наталья<br><span class="text-gradient">Чиркова</span>',
        'hero.subtitle': 'Топ-23 компании EWA. <br>Запускаю амбициозных партнёров на высокий доход.',
        'hero.stat1': 'Партнеров в команде',
        'hero.stat2_num': '590к',
        'hero.stat2': 'Ежемесячный доход',
        'hero.cta1': 'Начать бесплатно',
        'hero.cta2': 'Каталог продукции',
        'hero.cta3': 'Регистрация клиента',
        'hero.reg_note': 'Регистрация бесплатная — начните обучаться профессии сетевой предприниматель уже сейчас',

        // Audience
        'audience.title': 'Для кого эта система?',
        'audience.card1_title': 'Мамы в декрете',
        'audience.card1_text': 'Для тех, кто хочет реализоваться и зарабатывать, не отрываясь от семьи и воспитания детей.',
        'audience.card2_title': 'Предприниматели',
        'audience.card2_text': 'Для тех, кто ищет новые ниши с высокой маржинальностью и без рисков традиционного бизнеса.',
        'audience.card3_title': 'Найм и Фриланс',
        'audience.card3_text': 'Для тех, кто устал от потолка в доходах и хочет построить свой независимый источник прибыли.',

        // Values
        'values.title': 'Ценности Команды',
        'values.v1': 'Экологичность',
        'values.v2': 'Честность',
        'values.v3': 'Драйв',
        'values.desc': 'Мы не «впариваем» и не спамим. Мы строим бизнес красиво.',

        // About
        'about.title': 'Обо мне',
        'about.lead': 'Я — ТОП-лидер компании. Вхожу в 100 лучших контрактов. ТОП-23 в рейтинге.',
        'about.p1': 'Я построила команду с нуля и создала собственную авторскую методику рекрутинга и продаж, которая даёт быстрые и измеримые результаты.',
        'about.p2': 'Не имеет значения из какого вы города, есть ли у вас опыт или сколько вам лет. Важно только одно — ваше желание зарабатывать.',

        // Timeline
        'timeline.title': 'История Успеха',
        'timeline.y2023': 'Приход в компанию EWA. Без опыта.',
        'timeline.y2024': 'Вход в ТОП-100 контрактов компании. Первые чеки более 100 000₽.',
        'timeline.y2025': 'ТОП-23 рейтинга. Создание авторской системы обучения.',
        'timeline.today': 'Сегодня',
        'timeline.today_text': 'Команда 1000+ человек. Max чек 590 000₽. Выводим лидеров на результат.',

        // Methodology
        'method.title': 'Что вы получаете, <br>работая со мной',
        'method.c1_title': 'Система',
        'method.c1_text': 'Полностью упакованная система работы под ключ.',
        'method.c2_title': 'Стратегия',
        'method.c2_text': 'Пошаговая стратегия роста и масштабирования.',
        'method.c3_title': 'Инструменты',
        'method.c3_text': 'Готовые инструменты рекрутинга и продаж.',
        'method.c4_title': 'План',
        'method.c4_text': 'Чёткий план выхода на желаемый уровень дохода.',
        'method.c5_title': 'Поддержка',
        'method.c5_text': 'Личное сопровождение и поддержка на всех этапах.',
        'method.c6_title': 'Чат-бот',
        'method.c6_text': 'Автоматический помощник, который отвечает на вопросы 24/7.',

        // Quiz
        'quiz.title': 'Тест: Подходит ли вам сетевой бизнес?',
        'quiz.desc': 'Пройдите короткий тест и получите персональную стратегию.',
        'quiz.start': 'Начать тест',
        'quiz.result_title': 'У вас отличный потенциал!',
        'quiz.result_text': 'Моя система идеально вам подойдёт. Давайте обсудим ваш персональный план.',
        'quiz.result_cta': 'Получить стратегию',

        // Philosophy
        'philosophy.title': 'Философия<br><span class="text-gradient-gold">Результата</span>',
        'philosophy.quote': '«Моя система построена на практике, цифрах и реальных кейсах. Вы не будете разбираться сами — вы получите конкретные действия.»',
        'philosophy.desc': 'Настройтесь получить новую профессию, новые знания и сразу применять их на практике. Используя готовую систему, вы сможете выйти на стабильный доход.',
        'philosophy.cta': 'Начать путь',

        // Warning
        'warning.title': '⛔ Кому это НЕ подходит',
        'warning.li1': '❌ Тем, кто ищет «волшебную таблетку» и лёгкие деньги.',
        'warning.li2': '❌ Тем, кто не готов учиться и менять мышление.',
        'warning.li3': '❌ Тем, кто любит ныть и обвинять обстоятельства.',
        'warning.footer': 'Если это про вас — пожалуйста, закройте этот сайт. Мы работаем только с лидерами.',

        // Blog
        'blog.title': 'Полезные статьи',
        'blog.tag1': 'Мышление',
        'blog.tag3': 'Система',
        'blog.c1_title': 'Как перестать бояться продаж?',
        'blog.c1_text': '5 техник, которые перевернут ваше представление о бизнесе.',
        'blog.c2_title': 'Топ-5 ошибок новичка',
        'blog.c2_text': 'Почему 90% уходят в первый месяц и как попасть в те самые 10% успешных.',
        'blog.c3_title': 'Секрет быстрого старта',
        'blog.c3_text': 'Пошаговый план выхода на первые 50 000₽ за 2 недели.',
        'blog.read_more': 'Читать статью \u2192',

        // FAQ
        'faq.title': 'Частые вопросы',
        'faq.q1': 'Это финансовая пирамида?',
        'faq.a1': 'Нет, EWA Product — это официальная продуктовая компания с реальным физическим продуктом, сертификацией и прозрачной системой выплат. Пирамиды зарабатывают на взносах, мы — на товарообороте.',
        'faq.q2': 'Нужно ли увольняться с работы?',
        'faq.a2': 'Нет, на старте вы можете совмещать. Достаточно уделять бизнесу 2-3 часа в день. Когда доход от EWA превысит вашу зарплату, вы сами примете решение.',
        'faq.q3': 'У меня нет опыта в продажах. Получится?',
        'faq.a3': 'Конечно. Наша система обучения построена так, что даже новичок начинает получать результат в первую неделю. Мы даём скрипты, шаблоны и инструменты.',
        'faq.q4': 'Сколько нужно времени, чтобы выйти на доход?',
        'faq.a4': 'Всё индивидуально. В среднем мои партнёры выходят на 30-50 тысяч рублей уже на 2-й месяц активной работы по системе.',

        // Contacts
        'contacts.title': 'Свяжитесь со мной',
        'contacts.subtitle': 'Если вы готовы выйти на новый уровень дохода и мышления — я покажу вам, как сделать это быстрее.',
        'contacts.max_label': 'Канал в Max',
        'contacts.max_text': 'Присоединиться',
        'contacts.phone_label': 'Телефон',
        'contacts.vk_label': 'ВКонтакте',
        'contacts.vk_text': 'Мой профиль',
        'contacts.tg_label': 'Личный Telegram',
        'contacts.tg_channel_label': 'Telegram Канал',
        'contacts.tg_channel_text': 'Новости и кейсы',

        // Footer
        'footer.copy': '\u00A9 2026 Наталья Чиркова. Все права защищены.',
    },

    en: {
        // Nav
        'nav.contact': 'Contact',

        // Top bar
        'top.max': 'Max Channel',
        'top.vk': 'VKontakte',
        'top.tg_channel': 'TG Channel',

        // Theme panel
        'theme.theme': 'Theme',
        'theme.light': '☀️ Light',
        'theme.dark': '🌙 Dark',
        'theme.font': 'Heading Font',

        // Hero
        'hero.label': 'Business Mentor',
        'hero.title': 'Natalia<br><span class="text-gradient">Chirkova</span>',
        'hero.subtitle': 'Top-23 at EWA company. <br>Launching ambitious partners to high income.',
        'hero.stat1': 'Partners in team',
        'hero.stat2_num': '$7K+',
        'hero.stat2': 'Monthly income',
        'hero.cta1': 'Start for Free',
        'hero.cta2': 'Product Catalog',
        'hero.cta3': 'Client Registration',
        'hero.reg_note': 'Registration is free \u2014 start learning the profession of a network entrepreneur right now',

        // Audience
        'audience.title': 'Who is this system for?',
        'audience.card1_title': 'Moms on Maternity Leave',
        'audience.card1_text': 'For those who want to fulfill themselves and earn without leaving family and childcare.',
        'audience.card2_title': 'Entrepreneurs',
        'audience.card2_text': 'For those looking for new high-margin niches without the risks of traditional business.',
        'audience.card3_title': 'Employees & Freelancers',
        'audience.card3_text': 'For those tired of income ceilings who want to build an independent source of profit.',

        // Values
        'values.title': 'Team Values',
        'values.v1': 'Sustainability',
        'values.v2': 'Honesty',
        'values.v3': 'Drive',
        'values.desc': 'We don\u2019t push or spam. We build business beautifully.',

        // About
        'about.title': 'About Me',
        'about.lead': 'I am a TOP leader of the company. Among the top 100 contracts. TOP-23 in the ranking.',
        'about.p1': 'I built a team from scratch and created my own recruiting and sales methodology that delivers fast and measurable results.',
        'about.p2': 'It doesn\u2019t matter what city you\u2019re from, whether you have experience, or how old you are. Only one thing matters \u2014 your desire to earn.',

        // Timeline
        'timeline.title': 'Success Story',
        'timeline.y2023': 'Joined EWA company. No experience.',
        'timeline.y2024': 'Entered TOP-100 company contracts. First paychecks over 100,000\u20BD.',
        'timeline.y2025': 'TOP-23 ranking. Created an author\u2019s training system.',
        'timeline.today': 'Today',
        'timeline.today_text': 'Team of 1000+ people. Max paycheck 590,000\u20BD. Bringing leaders to results.',

        // Methodology
        'method.title': 'What you get <br>working with me',
        'method.c1_title': 'System',
        'method.c1_text': 'A fully packaged turnkey work system.',
        'method.c2_title': 'Strategy',
        'method.c2_text': 'A step-by-step growth and scaling strategy.',
        'method.c3_title': 'Tools',
        'method.c3_text': 'Ready-made recruiting and sales tools.',
        'method.c4_title': 'Plan',
        'method.c4_text': 'A clear plan to reach your desired income level.',
        'method.c5_title': 'Support',
        'method.c5_text': 'Personal guidance and support at every stage.',
        'method.c6_title': 'Chat Bot',
        'method.c6_text': 'An automated assistant that answers questions 24/7.',

        // Quiz
        'quiz.title': 'Quiz: Is network business right for you?',
        'quiz.desc': 'Take a short quiz and get a personalized strategy.',
        'quiz.start': 'Start Quiz',
        'quiz.result_title': 'You have great potential!',
        'quiz.result_text': 'My system is a perfect fit for you. Let\u2019s discuss your personal plan.',
        'quiz.result_cta': 'Get Strategy',

        // Philosophy
        'philosophy.title': 'Philosophy of<br><span class="text-gradient-gold">Results</span>',
        'philosophy.quote': '\u201CMy system is built on practice, numbers, and real cases. You won\u2019t figure it out alone \u2014 you\u2019ll get specific actions.\u201D',
        'philosophy.desc': 'Get ready for a new profession, new knowledge, and immediately apply it in practice. Using a ready-made system, you can achieve a stable income.',
        'philosophy.cta': 'Start Your Journey',

        // Warning
        'warning.title': '⛔ Who this is NOT for',
        'warning.li1': '❌ Those looking for a "magic pill" and easy money.',
        'warning.li2': '❌ Those not ready to learn and change their mindset.',
        'warning.li3': '❌ Those who love to complain and blame circumstances.',
        'warning.footer': 'If this is about you \u2014 please close this website. We only work with leaders.',

        // Blog
        'blog.title': 'Useful Articles',
        'blog.tag1': 'Mindset',
        'blog.tag3': 'System',
        'blog.c1_title': 'How to stop being afraid of sales?',
        'blog.c1_text': '5 techniques that will transform your view of business.',
        'blog.c2_title': 'Top 5 beginner mistakes',
        'blog.c2_text': 'Why 90% leave in the first month and how to be in the successful 10%.',
        'blog.c3_title': 'The secret to a fast start',
        'blog.c3_text': 'A step-by-step plan to earn your first 50,000\u20BD in 2 weeks.',
        'blog.read_more': 'Read article \u2192',

        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.q1': 'Is this a pyramid scheme?',
        'faq.a1': 'No, EWA Product is an official product company with real physical products, certification, and a transparent payment system. Pyramids earn from fees; we earn from product turnover.',
        'faq.q2': 'Do I need to quit my job?',
        'faq.a2': 'No, you can combine both at the start. Just dedicate 2-3 hours a day to the business. When your EWA income exceeds your salary, you\u2019ll make the decision yourself.',
        'faq.q3': 'I have no sales experience. Will it work?',
        'faq.a3': 'Absolutely. Our training system is designed so that even a beginner starts getting results in the first week. We provide scripts, templates, and tools.',
        'faq.q4': 'How long does it take to start earning?',
        'faq.a4': 'It\u2019s individual. On average, my partners reach 30-50 thousand rubles by the 2nd month of active work with the system.',

        // Contacts
        'contacts.title': 'Get in Touch',
        'contacts.subtitle': 'If you\u2019re ready to reach a new level of income and mindset \u2014 I\u2019ll show you how to do it faster.',
        'contacts.max_label': 'Max Channel',
        'contacts.max_text': 'Join',
        'contacts.phone_label': 'Phone',
        'contacts.vk_label': 'VKontakte',
        'contacts.vk_text': 'My Profile',
        'contacts.tg_label': 'Personal Telegram',
        'contacts.tg_channel_label': 'Telegram Channel',
        'contacts.tg_channel_text': 'News & Cases',

        // Footer
        'footer.copy': '\u00A9 2026 Natalia Chirkova. All rights reserved.',
    }
};

// Quiz translations (separate because quiz is rendered dynamically)
const quizTranslations = {
    ru: [
        {
            q: 'Вы готовы уделять обучению 1-2 часа в день?',
            a: ['Да, конечно', 'Нет, у меня нет времени', 'Зависит от результата']
        },
        {
            q: 'Был ли у вас опыт в бизнесе или продажах?',
            a: ['Да, был', 'Нет, я новичок', 'Немного пробовал(а)']
        },
        {
            q: 'Какая цель по доходу вас интересует?',
            a: ['30-50 тысяч рублей', '100-300 тысяч рублей', 'Миллион и больше']
        }
    ],
    en: [
        {
            q: 'Are you ready to dedicate 1-2 hours a day to learning?',
            a: ['Yes, of course', 'No, I don\u2019t have time', 'Depends on the result']
        },
        {
            q: 'Do you have experience in business or sales?',
            a: ['Yes, I do', 'No, I\u2019m a beginner', 'I\u2019ve tried a little']
        },
        {
            q: 'What income goal are you interested in?',
            a: ['$400-700/month', '$1,500-4,000/month', '$10,000+ /month']
        }
    ]
};

// ===========================
// Language Switching Logic
// ===========================
let currentLang = localStorage.getItem('site-lang') || 'ru';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update all data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update all data-i18n-html elements (innerHTML, for elements with <br> or <span>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update quiz data
    if (typeof quizData !== 'undefined' && quizTranslations[lang]) {
        for (let i = 0; i < quizTranslations[lang].length; i++) {
            quizData[i] = quizTranslations[lang][i];
        }
    }

    // Update language toggle buttons
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language
    applyLanguage(currentLang);

    // Language toggle click handler
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const option = e.target.closest('.lang-option');
            if (option) {
                const lang = option.getAttribute('data-lang');
                applyLanguage(lang);
            }
        });
    }
});
