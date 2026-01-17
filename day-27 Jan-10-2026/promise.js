const success = true;
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        if (success) {
            res("Promise resolved successfully!");
        } else {
            rej("Promise rejected!");
        }
    }, 1000);
});

myPromise.then(msg => {
    console.log(msg);
}).catch(err => {
    console.error(err);
});