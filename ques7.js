// console.log("bhaskar lodu");
const url = "https://api.genderize.io?name="
const go = document.getElementById("go");
const input = document.getElementById("input");
const h1 = document.getElementById("h1");

function fetchAPI() {
    fetch(url+input.value).then(res=>res.json()).then(res=>{
        const gender = res.gender;
        console.log(gender);
        if (gender === "male") {
            h1.innerText = "Your name is a Male"
        }else if(gender === "female") h1.innerText = "Your name is a Female"
    })
}
