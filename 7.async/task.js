class AlarmClock {
    intervalId = null;
    constructor() {
        this.alarmCollection = [];
    }

    addClock (clock, callback) {
        if (!(clock && callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(item => item.time === clock)) {
                console.warn('Уже присутствует звонок на это же время');
                // return;
        }

        this.alarmCollection.push({
            callback: callback,
            time: clock,
            canCall: true,
        })
    }

    removeClock (time) {
       const clock = time;
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== clock);
    }

    getCurrentFormattedTime () {
       return new Date().toLocaleTimeString("ru-RU", {
           hour: "2-digit",
           minute: "2-digit",
           }
       );
    }

    start () {
        if (this.intervalId !== null) return;

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000);
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }

}
function hi () {
    console.log('hi')
}
const alarm1 = new AlarmClock();
const now = alarm1.getCurrentFormattedTime();
alarm1.addClock('09:00', hi);
alarm1.addClock('09:00', hi);
alarm1.addClock('09:01', hi);
alarm1.addClock('00:09', hi);
alarm1.addClock(now, hi);
alarm1.start();
console.log(alarm1.alarmCollection);

