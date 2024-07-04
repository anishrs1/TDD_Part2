const assert = require("assert");
const { describe } = require("mocha");
const FilterWords = require("../class/03-filter-words.js");

describe("class contains the function that removes the words in the array ending in 'er' and then returns the array.", ()=>{
    it("function removes the words in the array ending in 'er' and then returns the array.",()=>{
        filter1 = new FilterWords();
        let arr1 = ["computer", "landscape", "greater", "bear", "table", "wall", "better"];
        let newArr = filter1.filterWords(arr1);
        //assert.equal(newArr, ["landscape", "bear", "table", "wall"]);
        for(let i = 0;i<newArr.length;i++) {
            assert.notEqual(["computer"], newArr[i]);
            assert.notEqual(["greater"], newArr[i]);
            assert.notEqual(["better"], newArr[i]);
        }
    });
    it("type of elements in the array should be string only.",() => {
        let filterWords1 = new FilterWords();
        let arr = ["computer", "landscape", "greater", "bear", "table", "wall", "better", 15, 10];

        try {
            filterWords1.filterWords(arr);         
            assert.fail("Missed checking the typeerror condition.");   
        } catch (e) {
            assert.equal(e instanceof TypeError, true); 
            assert.equal(e.message, "Element type should be string only.");
        }
    });


});