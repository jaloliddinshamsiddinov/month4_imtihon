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

function splitApp(str) {
  for (let i = 0; i < str.length; i++) {
    if (typeof(+str[i]) == "Number") {
      console.log("bor");
      console.log(str[i]);
    } else {
    //   console.log("yo'q");
        console.log(+str[i]);
    }
  }
}

splitApp(str2);
