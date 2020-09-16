function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}
async function getBanana() {
    await delay(500);
    return '🍌'
}

// 가장 늦게 출력돼. 비동기니까
function pickAllFruits2() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
}

// console.log(pickAllFruits())
pickAllFruits2().then(console.log)
console.log('apple')
console.log('ipad')

// race : 먼저 반환되는 인자를 가져오는 느낌?
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)