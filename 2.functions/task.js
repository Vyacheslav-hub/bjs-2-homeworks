function getArrayParams(...arr) {
    // let sum = 0;
    // let avg = 0;
    //
    // // for (let i = 0; i < arr.length; i++) {
    // //     if (arr[i] > max) {
    // //         max = arr[i];
    // //     }
    // //
    // //     if (arr[i] < min) {
    // //         min = arr[i]
    // //     }
    // //
    // //     sum += arr[i];
    // // }

   const min = Math.min(...arr);
   const max = Math.max(...arr);
   const sum = arr.reduce((acc, item) => acc + item, 0 );
   const avg = +(sum / arr.length).toFixed(2);

    return {
        min: min,
        max: max,
        avg: avg,
    };
}
(getArrayParams(-99, 99, 10));


function summElementsWorker(...arr) {
    const sum = arr.reduce((acc, item) => acc + item, 0);
    return sum ;
}
(summElementsWorker(2,5,3));

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i]
    }

    return max - min;
}
(differenceMaxMinWorker());

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0 ) {
    //         sumEvenElement += arr[i];
    //     } else {
    //         sumOddElement += arr[i];
    //     }
    // }

    arr.forEach(item => {
        if (item % 2 === 0 ) {
            sumEvenElement += item;
        } else {
            sumOddElement += item;
        }
    })

    const difference = sumEvenElement - sumOddElement;
    return difference;
}
(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }

    if (countEvenElement === 0) {
        return 0;
    }

    return sumEvenElement / countEvenElement;
}
(averageEvenElementsWorker());

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    // for (let i = 0; i < arrOfArr.length; i++) {
    //    const result = func(...arrOfArr[i]);
    //
    //    if (result > maxWorkerResult) {
    //        maxWorkerResult = result;
    //    }
    // }

    for (const arr of arrOfArr) {
        const result = func(...arr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
(makeWork(arr, summElementsWorker));
