

class Number {
    constructor(num){
        this.number = num;
    }
    add(num){
        if(!(num instanceof Number)) {
            throw new TypeError("Type of the variable should be number only.");
        }       
        return new Number(this.number+num.number);
    }
    subtract(num){
        if(!(num instanceof Number)) {
            throw new TypeError("Type of the variable should be number only.");
        } 
        return new Number(this.number-num.number);
    }
    multiply(num){
        if(!(num instanceof Number)) {
            throw new TypeError("Type of the variable should be number only.");
        } 
        return new Number(this.number*num.number);
    }
    divide(num){
        if(!(num instanceof Number)) {
            throw new TypeError("Type of the variable should be number only.");
        } 
        if(num.number === 0){
            throw new Error("Cannot divide by zero.");
        }
        return new Number(this.number/num.number);
    }
}

let number1 = new Number();

module.exports = Number;