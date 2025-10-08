function parseCount (value) {
        const result = Number.parseFloat(value);
        if (Number.isNaN(result)) {
            throw new Error('Невалидное значение');
        }return result;
}

function validateCount(value) {
       try {
           return parseCount(value)
       }catch (e) {
          return e
       }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a){
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
       return  new Triangle(a, b, c);
    }catch (e) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
const t = getTriangle(7,5,6);
console.log(t.area);
console.log(t.perimeter)
const triangle = new Triangle(4,4,6);
console.log(triangle.perimeter);
console.log(triangle.area);
