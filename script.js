const endDate = new Date('2025-06-07');

const surprises = [
    "Сегодня идеальный день для мечты о новом путешествии!",
    "Вдохни глубже — впереди новые горизонты!",
    "Позволь себе маленькую радость прямо сейчас.",
    "Представь, как будешь улыбаться в аэропорту!",
    "Сегодня отличный день для планов о будущем.",
    "Подари себе 5 минут отдыха — ты заслужил(а).",
    "Посмотри на небо — ты ближе к мечте, чем кажется.",
    "Отправь другу сообщение с хорошими новостями!",
    "Сфотографируй что-то красивое сегодня.",
    "Подумай о чём-то, за что благодарен(на).",
    "Каждый шаг приближает тебя домой.",
    "Планируй поездку: какие места хочешь увидеть?",
    "Сегодня день для лёгкой радости.",
    "Улыбнись без причины!",
    "Пей больше воды и береги силы.",
    "Ты делаешь всё правильно — просто продолжай!",
    "Запиши 3 хорошие мысли о дне.",
    "Впереди встреча с любимыми людьми.",
    "Позволь себе помечтать по-крупному.",
    "Скоро новое начало — и оно будет прекрасным!"
];

// Функция для подсчета времени до конца отсчета
function updateCountdown() {
    const now = new Date();
    const diffTime = endDate - now;
    const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    document.getElementById('countdown').textContent = `${daysLeft} дней`;
}

function showSurprise() {
    const today = new Date();
    const daySeed = today.getDate() + today.getMonth() + today.getFullYear();
    const surpriseText = surprises[daySeed % surprises.length];
    const surpriseBox = document.getElementById('surprise');
    surpriseBox.textContent = surpriseText;
    surpriseBox.classList.add('show');
    
    // Скрываем кнопку после нажатия
    document.querySelector('button').style.display = 'none';
}

// Устанавливаем градиентный фон
function updateBackground() {
    const today = new Date();
    const daySeed = today.getDate() + today.getMonth() + today.getFullYear();
    // Градиент будет меняться в зависимости от дня
    const gradient = `linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`;
    document.body.style.background = gradient;
}

// Инициализация
updateCountdown();
updateBackground();
setInterval(updateCountdown, 60000);