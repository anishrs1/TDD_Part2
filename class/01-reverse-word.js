

class ReverseWord {
    reverseWords(arr) {
        for(let i = 0;i<arr.length;i++) {
            if(typeof arr[i]!= "string"){
                throw new TypeError("Element type should be string only.");
            }
        }

        
        let arr1 = [];
        for(let i = 0;i<arr.length;i++){
            let string2 = "";
            let string1 = arr[i];
            for(let j = string1.length-1;j>=0;j--) {
                
                string2+=string1[j];
            }
            arr1.push(string2);   
        }
        return arr1;
    }
}

let reverseWord1 = new ReverseWord();

console.log(reverseWord1.reverseWords(["mountain", "rainbow", "trees", "valley"]));
console.log(reverseWord1.reverseWords(["computer", "mouse", "touchpad", "charger"]));
//console.log(reverseWord1.reverseWords(["mountain", "rainbow", "trees", "valley", 1, 3]));

module.exports = ReverseWord;