var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = 'Angular';
        this.sub_two = 'ReactJs';
        this.sub_three = 'VueJs';
    }
    ;
    class_one.prototype.getSubOne = function () {
        return this.sub_one;
    };
    ;
    class_one.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    ;
    class_one.prototype.getSubThree = function () {
        return this.sub_three;
    };
    ;
    return class_one;
}());
;
var obj = new class_one();
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree());
/* class class_one {
    private sub_one: string;
    private sub_two: string;
    private sub_three: string;
    constructor() {
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    };
    public getSubOne(): string {
        return this.sub_one;
    };
    public getSubTwo(): string {
        return this.sub_two;
    };
    public getSubThree(): string {
        return this.sub_three;
    };
};
let obj: class_one = new class_one();
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree());
 */ 
