"use strict";
exports.__esModule = true;
var age;
var name;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
name = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
var person;
person = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var loadingStatus = {
    status: Status.LOADING
};
if (loadingStatus.status === Status.LOADING) {
    console.log('Status: ', Status.LOADING);
}
// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }
