"use strict"

function solveEquation(a, b , c) {
    let d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return [];
    }

    if (d === 0) {
        let root = -b / (2 * a)
        return [root];
    }

    if (d > 0) {
        const root1 = (-b + Math.sqrt(d) ) / (2 * a);
        const root2 = (-b - Math.sqrt(d) ) / (2 * a);
        return [root1, root2];

    }

}
(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const interestRate = percent / 100 / 12;
    const principal = amount - contribution;
    if (principal <= 0) return 0;

    const monthlyPayment = principal * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
    const totalPayment = +(monthlyPayment * countMonths).toFixed(2);
    return totalPayment;
}
(calculateTotalMortgage(10, 0, 50000, 12));
