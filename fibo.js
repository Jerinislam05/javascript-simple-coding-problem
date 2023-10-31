// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 --> krome prothom 2tar jogfol, mame j number e dhora hok seta tar ager 2ta number er jogfol.
/* 
fibo[3] = fibo[2] + fibo[1]
fibo[50] = fibo[49] + fibo[48]
fibo[i] = fibo[i-1] + fibo[i-2]
fibo[n] = fibo[n-1] + fibo[n-2]
*/

const fibo = [0, 1];
for (let i = 2; i <= 25; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);