// let age: number;
// let name: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize: undefined;
// let callback: (a: number)  => number;

// age = 50;
// name = 'Max';
// toggle = true;
// empty = null;
// notInitialize = undefined;
// callback = (a) => { return 100 + a };



// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// // Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

// let some:unknown;
// some = 'Text';

// let str: string;
// if (typeof some === 'string'){
//   str = some;
// }
// // Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

// let person: [string, number];
// person = ['Max', 21];

// // Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
// enum Status {LOADING, READY};

// const loadingStatus = {
//   status: Status.LOADING,
// }

// if (loadingStatus.status === Status.LOADING) {
//   console.log('Status: ', Status.LOADING);
// }
// if (loadingStatus.status === Status.READY) {
//   console.log('Status: ', Status.READY);
// }

// export {loadingStatus};
// // Сделайте переменную, которая может принимать или строку или число.
// let both: string|number;
// both = 5;
// both = 'free';

// // Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// let one: 'enable' |'disable';
// one = 'enable';
// one = 'disable';

// // Укажите типы для следующих функций
// function showMessage(message: string): void {
//   console.log(message);
// }


// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }

// // Создайте свой тип данных на основе имеющихся данных.

// type Data = {
//   title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open'|'close',
//   details?: {
//     createAt: string,
//     updateAt: string,
//   }
// }
// const page1: Data = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const page2: Data = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }


// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key

// Создайте объект Key
// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature

class Key {
  private signature:number;

  constructor () {
    this.signature = Math.random();
    }
    
    public getSignature(): number {
        return this.signature;
    }
}
const key = new Key();

// Создайте объект Person
// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key


class Person {
    constructor (private key: Key) {
    }
    
    getKey(): Key {
        return this.key;
    }
}

const person = new Person(key);

abstract class House {
    protected door = false;

    private tenants: Person[]=[];

    constructor( protected key: Key) {

    }

    comeIn(person: Person):void {
        if (!this.door) {
            throw new Error('Door is close');  
        }
        this.tenants.push(person);
        console.log('Person inside');
    }
    abstract openDoor(key: Key): boolean;
    
}

// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве
//  key равен ли он ключу из аргумента, если да, открываем дверь.

class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() !== this.key.getSignature()){
            throw new Error('Wrong key.');  
        }
        return this.door = true;
}
}

const house = new MyHouse(key)
house.openDoor(person.getKey());
house.comeIn(person);

// Сделайте так, чтобы жилец попал домой.


