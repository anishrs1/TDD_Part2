const assert = require("assert");
const ReverseWord = require("../class/01-reverse-word.js");
const { describe } = require("mocha");

describe("Reverse word class", ()=>{
    it("Reverse word function should reverse the words in the array and return the array with reversed words.",() => {

        let reversedArray = new ReverseWord();
        let arr = ["mountain", "rainbow", "trees", "valley"];
        let reversedArr = reversedArray.reverseWords(arr);



        for(let i = 0;i<reversedArr.length;i++) {
            assert.equal(arr[i].split('').reverse().join(''), reversedArr[i]);
        }
    });
    it("type of elements in the array should be string only.",() => {
        let reversedArray = new ReverseWord();
        let arr = ["computer", "mouse", "touchpad", "charger", 1, 2];

        try {
            reversedArray.reverseWords(arr);
            assert.fail("Missed checking the typeerror condition.");
        } catch (e) {
            assert.equal(e instanceof TypeError, true); 
            assert.equal(e.message, "Element type should be string only.");
        }
    });
});