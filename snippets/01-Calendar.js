// Instructions
// Run this file by typing `node snippets/01-Calendar.js` in the terminal
// Please write your code after each comment

// 10 coding challenges for beginners

// Challenge 1: Print current date and time
const currentDate = new Date();
    console.log("🚀 ~ Current Date", currentDate);

// Challenge 2: Print the current month
const currentMonth = currentDate.getMonth() + 1
    console.log("💩 ~ Current Month", currentMonth)

// Challenge 3: Print the first letter of the current day
const firstLetter = currentDate.toDateString().charAt(0)
    console.log("🤪 ~ First Letter Of the Day", firstLetter)

// Challenge 4: Print the number of days in the current month
const getDays = (year, month) => {
    return new Date(currentDate.getFullYear, currentDate.getMonth + 1, 0).getDate();
};
const daysInTheMonth = getDays(currentDate.getFullYear(), currentDate.getMonth() );
console.log("🚀 ~ file: 01-Calendar.js:24 ~ daysInTheMonth", daysInTheMonth)


// Challenge 5: Print the number of days left in the current month

// Challenge 6: Print the number of hours left in the current day

// Challenge 7: Print the number of minutes left in the current hour

// Challenge 8: Print the number of seconds left in the current minute

// Challenge 9: Print the number of milliseconds left in the current second

// Challenge 10: Print the number of days since January 1st
