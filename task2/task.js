const one = document.getElementById("one")
const third=document.getElementById("three")

one.addEventListener("click",function a() {
   one.style.backgroundColor = "green"
   
})

document.getElementById("two").addEventListener("click", function ab() {
    document.getElementById("two").style.backgroundColor ="red"
})

three.addEventListener("click", function b() {
    three.style.backgroundColor ="red"
})