javastring = "javascript is amazing";
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
let result = '';
for (let char of javastring) {
    if (!vowels.has(char)) {
        result += char;
    }
}
console.log(result);