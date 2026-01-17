const myFunc = async () => {
    const myName = await myInfo();
    console.log(myName);
};

const myInfo  = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Asif Abir");
        }, 1000);
    });
};

myFunc();
