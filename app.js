"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadingStatus = void 0;
let age;
let name;
let toggle;
let empty;
let notInitialize;
let callback;
age = 50;
name = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person;
person = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const loadingStatus = {
    status: Status.LOADING,
};
exports.loadingStatus = loadingStatus;
if (loadingStatus.status === Status.LOADING) {
    console.log('Status: ', Status.LOADING);
}
if (loadingStatus.status === Status.READY) {
    console.log('Status: ', Status.READY);
}
// Сделайте переменную, которая может принимать или строку или число.
let both;
both = 5;
both = 'free';
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let one;
one = 'enable';
one = 'disable';
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
