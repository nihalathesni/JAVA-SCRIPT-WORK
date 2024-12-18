let a= 0

document.getElementById("inc").addEventListener("click",function () {
    a++
    document.getElementById("head").innerHTML = a
})


document.getElementById("dec").addEventListener("click",function () {
    a--
    document.getElementById("head").innerHTML = a
})


document.getElementById("reset").addEventListener("click",function () {
    a=0
    document.getElementById("head").innerHTML = a
})