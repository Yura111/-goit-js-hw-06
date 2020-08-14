import user from "./users.js";

// Задание 1
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(user))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(user, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



