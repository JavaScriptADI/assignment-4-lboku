// 1. Write a for loop to print the numbers 1 through 10.


// let i = 1;
// while (i <= 10) {
// console.log(i);
// i++;
// }
for ( let i = 1; i <= 10; i++){
    console.log(i);
}

// 2. Write a for loop that prints the numbers 10 through 1.


// let N = 10;
// while (N >= 1) {
// console.log(N);
// N--;
// }
for (let N = 10; N >= 1; N--) {
    console.log(N);
}

// 3. Explain the code below. Write a comments to each line.
//     ```js
    let sum = 0;  //  (შეიქმნა ცვლადი რომლის ნმიშვნელობა არის 0)
    for (let i = 1; i <= 50; i++) {  // დაიწყეთ for loop  ციკლი 'i'-ით მნიშვნელობა 1-ით და გრძელდება ციკლი, სანამ 'i' არის 50-ზე ნაკლები ან ტოლი. ყოველი გამეორების შემდეგ გაიზრდება 'i' 1-ით.
        sum += i; // ამატებს ი მიმდინარე მნიშვნელობას
    }
    console.log(sum); //კონსოლდება საბოლოო მნიშვნელობა
//     ```
// 4. How many iterations are in the loop below? Explain.
//     ```js
    for (let i = 0; i < 10; i += 2) {  // for loop ციკლი გვაქვს რომლის იტერაცია იწყება 0დან და განმეორება უნდა მოხდეს იმდენჯერ, მანამ სანამ იტერაციის მნიშვნელობა არ იქნება 10 ზე ნაკლები. ვინაიდან იტერაციის  დაპლიუსება ყოველი ციკლის შემდგომ ხდება 2-ით, ციკლი განმეორდება 5ჯერ. პირველი დაიბეჭდება 0 რადგან იტერაციის მნიშვნელობა იწყება ნოლიდან, ხოლო შემდეგ 2,4,6,8 consoleზე დაიბეჭდება 0,2,4,6,8
        console.log(i);
    }
//     ```
// 5. What does the break statement do? Explain and give an example.
// break  გამოიყენება ციკლის ნაადრევად დასასრულებლად, როდესაც შეხვდება საჭირო მნიშვნელობა ის მაშინვე წყვეტს ციკლს სადაც მოქმედებს ის.
for (let i = 1; i <= 10; i++) {  
    if (i === 5) {  
        break;  
    }
    console.log(i);  
}
// 6. What does the continue statement do? Explain and give an example.
//continue გამოიყენება რათა გადაახდეს მიმდინარე განმეორებას  დაა გააგრძელოს ის
for (let i = 1; i <= 10; i++) {  
    if (i === 5) {  
        continue;  
    }
    console.log(i);  
}
// 7. Generate and print a random number between 1 adn 100 until you get the number 27;
let randomNum;

do {
    randomNum = Math.floor(Math.random() * 100) + 1; 
    if (randomNum !== 27) {
        continue; 
    }
    console.log(randomNum); 
} while (randomNum !== 27);  


// 8. Generate Random Password. HINT - Use ASCII codes to generate random characters.
function RandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";  // Define the characters you want in your password
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length); 
        password += charset[randomIndex];  
    }

    return password;  
}

const passwordLength = 8; 
const randomPassword = RandomPassword(passwordLength); 
console.log(randomPassword);  

// 9. "There is a man somewhere, Find him", Below code generates string with 2 possible characters, `" "` and `"?"`. Write a code that will find the position of `"?"`.
//     ```js
    let str = "";
    for (let i = 0; i < 10; i++) {
        str += Math.random() > 0.5 ? " " : "?";
    }
    console.log(str);

//     // write code that finds the position (index) of "?".
//     // do not use indexOf method!
//     // HINT: You can iterate strings' characters using for loop.
//     // and you can access each character by using str[i]
//     ``` 
// 10. "Mystery Room", Write a code that will generate 2d representation of a room. you should generate an empty space, wall or a mystery box. You can use any characters you want. The room should be 10x10. The room should have 10 walls, 1 mystery boxes and the rest should be empty space, mystey box location should be random!. The room should look something like this:
//     ```
//     ##########
//     #?       #
//     #        #
//     #        #
//     #        #
//     #        #
//     #        #
//     #        #
//     #        #
//     ##########
//     ```

console.log("##########")
console.log("#?       #")
let room = ("#        #")
for ( let i = 1; i < 10; i++){
    console.log(room)
}
console.log("##########")
