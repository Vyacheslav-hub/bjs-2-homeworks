class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // Таймер для проверки времени
    }

    // Метод для добавления нового звонка
    addClock(time, callback) {
        // Проверка на наличие обязательных аргументов
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        // Проверка на дублирование времени звонка
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        // Добавление нового звонка в коллекцию со свойствами time, callback и canCall
        this.alarmCollection.push({
            time,       // Время звонка
            callback,   // Коллбэк функция
            canCall: true // Изначально можно вызывать коллбэк
        });
        console.log(`Звонок на ${time} добавлен`);
    }

    // Метод для удаления звонка по времени
    removeClock(time) {
        const initialLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

        if (this.alarmCollection.length < initialLength) {
            console.log(`Звонок на ${time} удален`);
        } else {
            console.warn(`Звонок на ${time} не найден`);
        }
    }

    // Метод для получения текущего времени в формате HH:MM
    getCurrentFormattedTime() {
        const now = new Date();
        return now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    }

    // Метод для запуска будильника
    start() {
        if (this.intervalId !== null) {
            console.log("Таймер уже запущен");
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.callback();   // Вызов функции-коллбэка
                    alarm.canCall = false; // После срабатывания коллбэка блокируем его повторный вызов
                }
            });
        }, 1000); // Проверка каждую секунду
    }

    // Метод для остановки проверки звонков
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log("Таймер остановлен");
        }
    }

    // Метод для сброса звонков, чтобы они могли сработать снова
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
        console.log("Все звонки сброшены и могут сработать снова");
    }

    // Метод для удаления всех звонков
    clearAlarms() {
        this.stop(); // Останавливаем текущий интервал
        this.alarmCollection = []; // Очищаем коллекцию звонков
        
    }
}
