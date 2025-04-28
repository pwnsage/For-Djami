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

// Картинки фона
const backgrounds = [
    "url('https://source.unsplash.com/1080x1920/?beach,travel')",
    "url('https://source.unsplash.com/1080x1920/?desert')",
    "url('https://source.unsplash.com/1080x1920/?city,night')",
    "url('https://source.unsplash.com/1080x1920/?mountains,sky')",
    "url('https://source.unsplash.com/1080x1920/?ocean')",
    "url('https://source.unsplash.com/1080x1920/?forest')",
    "url('https://source.unsplash.com/1080x1920/?sunset')"
];

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

// Устанавливаем фон в зависимости от дня
function updateBackground() {
    const today = new Date();
    const daySeed = today.getDate() + today.getMonth() + today.getFullYear();
    const bg = backgrounds[daySeed % backgrounds.length];
    document.body.style.backgroundImage = bg;
}

// Инициализация
updateCountdown();
updateBackground();
setInterval(updateCountdown, 60000);
