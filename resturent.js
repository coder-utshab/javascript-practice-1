const age = 80;
const price = 500;

if (age < 12) {
    console.log('you can eat for free');
}
// else if (age >= 60) {
//     // 50% discount
//     const discount = price * 50 / 100;
//     console.log(price - discount);
// }
else if (age >= 40) {
    // 25% discount
    const discount = price * 25 / 100;
    console.log(price - discount);
}
else {
    console.log(price);
}
