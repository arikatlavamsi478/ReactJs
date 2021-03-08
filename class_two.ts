class class_two {
    constructor(
        public arg1: string,
        public arg2: string,
        public arg3: string) { }
};

let obj1: class_two = new class_two('Angular', 'MongoDb', 'NodeJs');
console.log(obj1.arg1, obj1.arg2, obj1.arg3);

let obj2: class_two = new class_two('ReactJS', 'MongoDb', 'NodeJs');
console.log(obj2.arg1, obj2.arg2, obj2.arg3);

let obj3: class_two = new class_two('Angular', 'MongoDb', 'NodeJs');
console.log(obj3.arg1, obj3.arg2, obj3.arg3);

// if constructor members are public we can diretly access through objects as coding above.

