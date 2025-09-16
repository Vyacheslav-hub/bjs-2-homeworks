class PrintEditionItem {
    #state
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    }

    get state () {
        return this.#state;
    }

    set state (value) {
        if (value < 0) {
            this.#state = 0;
        }else if (value > 100) {
            this.#state = 100;
        }else this.#state = value

    }

    fix() {
        this.state *= 1.5;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

class Library {
    constructor(name) {
        this.name = String(name);
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
       return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const book = this.books.find(book => book.name === bookName);
        if (!book) {
            return null;
        }
        this.books = this.books.filter(b => b !== book);
        return book;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

library.addBook(
    new DetectiveBook(
        "Аркадий",
        "Пикник",
        1919,
        200
    )
);

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
           if (!this.marks?.[subject]) {
               this.marks[subject] = [];
           }
           this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (!this.marks?.[subject]) {
            return 0;
        }
       return this.marks[subject].reduce((sum, n) => sum + n) / this.marks[subject].length
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        const total = subjects.reduce((sum, subject) => {
            return sum + this.getAverageBySubject(subject);
        }, 0)
        return total / subjects.length || 0;
    }
}
const student = new Student("Олег Никифоров");
console.log(student)
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.marks)
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverageBySubject("химия"));
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
