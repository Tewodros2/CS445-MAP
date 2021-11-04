function isPrime(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {

                    reject({ prime: false });
                }

            }
            resolve({ prime: num > 1 });
        }, 500);
    });
};
async function isprimeAsync(num) {
    let result = await isPrime(7);
    console.log(result);
}


console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

// Output:
// start
// end
// { prime: true }