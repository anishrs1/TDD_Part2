

class FilterWords {

    filterWords(arr){
        let arr1 = [];
        for(let i = 0;i<arr.length;i++) {
            if(typeof arr[i]!= "string"){
                throw new TypeError("Element type should be string only.");
            }
        }
        for(let i = 0;i<arr.length;i++) {
            let string1 = arr[i];
            if(string1[string1.length-2] === "e" && string1[string1.length-1] === "r") {
                //don't do anything.
            }
            else{
                arr1.push(string1);
            }
        }
        return arr1;
    }
}
let filterWords1 = new FilterWords();

console.log(filterWords1.filterWords(["computer", "landscape", "greater", "bear", "table", "wall", "better"]));

module.exports = FilterWords;