var class_two = /** @class */ (function () {
    function class_two(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_two;
}());
;
var obj1 = new class_two('Angular', 'MongoDb', 'NodeJs');
console.log(obj1.arg1, obj1.arg2, obj1.arg3);
var obj2 = new class_two('ReactJS', 'MongoDb', 'NodeJs');
console.log(obj2.arg1, obj2.arg2, obj2.arg3);
var obj3 = new class_two('Angular', 'MongoDb', 'NodeJs');
console.log(obj3.arg1, obj3.arg2, obj3.arg3);
