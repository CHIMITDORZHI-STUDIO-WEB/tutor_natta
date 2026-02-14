document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // Smooth Scrolling
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===========================
    // Scroll Reveal (Intersection Observer)
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // ===========================
    // Theme Panel
    // ===========================
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeMenu = document.getElementById('themeMenu');

    if (themeBtn && themeMenu) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!themeMenu.contains(e.target)) {
                themeMenu.classList.remove('active');
            }
        });
    }

    // ===========================
    // Font Switching
    // ===========================
    const fontButtons = document.querySelectorAll('.font-opt');
    const root = document.documentElement;

    fontButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            fontButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const font = btn.getAttribute('data-font');
            const fontMap = {
                'playfair': "'Playfair Display', serif",
                'cormorant': "'Cormorant Garamond', serif",
                'cinzel': "'Cinzel', serif",
                'tenor': "'Tenor Sans', sans-serif"
            };

            root.style.setProperty('--font-serif', fontMap[font] || fontMap.playfair);
        });
    });

    // ===========================
    // Day/Night Theme Switching
    // ===========================
    const themeOptions = document.querySelectorAll('.theme-opt');

    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            themeOptions.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.getAttribute('data-mode');
            document.body.classList.toggle('dark-mode', mode === 'dark');
        });
    });

    // ===========================
    // FAQ Accordion
    // ===========================
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }

            // Update aria
            q.setAttribute('aria-expanded', !isActive);
        });
    });

    // ===========================
});

// ===========================
// Quiz Logic (Global scope for onclick)
// ===========================
const quizData = [
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
];

let currentQ = 0;

function startQuiz() {
    currentQ = 0;
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-game').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    if (currentQ >= quizData.length) {
        showQuizResult();
        return;
    }

    const q = quizData[currentQ];
    const progressEl = document.getElementById('quiz-progress');
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');

    // Update progress bar
    const percent = ((currentQ) / quizData.length) * 100;
    progressEl.style.setProperty('--quiz-progress', percent + '%');

    questionEl.textContent = q.q;
    optionsEl.innerHTML = '';

    q.a.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            currentQ++;
            renderQuestion();
        });
        optionsEl.appendChild(btn);
    });
}

function showQuizResult() {
    const progressEl = document.getElementById('quiz-progress');
    progressEl.style.setProperty('--quiz-progress', '100%');

    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
}
