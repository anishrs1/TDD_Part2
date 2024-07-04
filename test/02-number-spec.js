const assert = require("assert");
const Number = require("../class/02-number.js");
const { describe } = require("mocha");

describe("Arithmetic class should perform four operations with a number", ()=>{
    it("add method should make sure type is number only and it should do addition of the number", ()=> {
        let num1 = new Number(4);
        let num2 = 11;
        try{
            let num = num1.add(num2);
            assert.fail("Missed checking the typeerror condition.");
        }
        catch(x) {
            assert.equal(x instanceof TypeError, true);
            assert.equal(x.message, "Type of the variable should be number only.");
        }
    });

    it("subtract method should make sure type is number only and it should do subtraction with the number", ()=> {
        let num1 = new Number(12);
        let num2 = 9;
        try{
            let num = num1.subtract(num2);
            assert.fail("Missed checking the typeerror condition.");
        }
        catch(x) {
            assert.equal(x instanceof TypeError, true);
            assert.equal(x.message, "Type of the variable should be number only.");
        }
    });

    it("multiply method should make sure type is number only and it should do multiplication with the number", ()=> {
        let num1 = new Number(13);
        let num2 = 4;
        try{
            let num = num1.multiply(num2);
            assert.fail("Missed checking the typeerror condition.");
        }
        catch(x) {
            assert.equal(x instanceof TypeError, true);
            assert.equal(x.message, "Type of the variable should be number only.");
        }
    });

    it("divide method should make sure type is number only and it should do division with the number. Also, it should make sure denominator is not zero.", ()=> {
        let num1 = new Number(168);
        let num2 = new Number(0);
        let num3 = 4;

        try{
            let num = num1.divide(num3);
            assert.fail("Missed checking the typeerror condition.");
        }
        catch(x) {
            assert.equal(x instanceof TypeError, true);
            assert.equal(x.message, "Type of the variable should be number only.");
        }
        try{
            let num = num1.divide(num2);
            assert.fail("Missed checking cannot divide by zero condition.");
        }
        catch(e) {
            assert.equal(e instanceof Error,true);
            assert.equal(e.message, "Cannot divide by zero.");
        }        
    });
});