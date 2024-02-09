// const a = document.querySelector("#hello");
// a.innerHTML = " hello world"
// a.addEventListener("click", function() {
//     a.innerHTML = "i'm changed"
// })


var a = document.querySelector("#bulb");
var b = document.querySelector("#btn-bulb");

b.addEventListener('click', function() {
    alert("clicked");
    a.style.backgroundColor = "yellow";
});
