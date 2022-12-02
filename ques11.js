// console.log("bolo bhaskar chutiya hai");
const h1 = document.getElementById("h1");
const password = document.getElementById("pass");
const check = document.getElementById("check");

// function chalu() {
//     if (password.value =! null) {
//         check.removeAttribute("disabled");
//     }else check.setAttribute("disabled", "");
//     console.log(password.value);
// }
function checkP() {
    const text = password.value;
    console.log(text);
    const len = text.length
    console.log(len<10);
    console.log(len); 
    if (len < 10) {
        h1.innerText = "Error"
        h1.style.color = "red"
        password.style.backgroundColor = "red"
    } else {
        h1.innerText = "!!Success!!"
        h1.style.color = "green"
        password.style.backgroundColor = "green"
        
    }  
    check.setAttribute("disabled","") ; 
}
console.log(password.value);
