/* task _____________1 */

let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(3, 1);
console.log(arr);

/* task _____________2 */
let str = "salom dunyo";
function reverseApp(s) {
  return s.split("").reverse().join("");
}
console.log(reverseApp(str));

/* task _____________3 */
let str2 = "1java2script3 5 deve6lo4per";

function splitApp(str, call) {
    let resultNum = [];
    let resultStr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 1 ||
      str[i] == 2 ||
      str[i] == 3 ||
      str[i] == 5 ||
      str[i] == 6 ||
      str[i] == 4
    ) {
      resultNum.push(str[i]);
    } else {
      resultStr.push(str[i]);
    }
  }
  return call(resultStr, resultNum);
}

splitApp(str2, (num, str) => {
  console.log(num);
  console.log(str);
});
